const express = require("express");
const app = express();
var http = require('http');
var request = require('request');

const port = process.env.PORT || 8080; // default port to listen
const YTAPIKey = process.env.YTAPIKey

const allowedChannels = [
    "UC1D3Fy0L0aoI0OfUEZnWy5A", //JJP
    "UCLjN4YxvXZDIXtXe_GJnY4g", // EVP
     "UCzYqSifCwLYpmgRxvNo7BzA", //J3D
    "UC78wYrq_keVaDV8STReHRxg"];// JVC

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Proxy API to retrieve YouTube data.");
});
// app.get("/api/envs/:keyName", (req, res) => {
//     res.send("Hello world!" + process.env[req.params.keyName]);
// });

app.get("/api/channels/:channelId/videos", async (req, res) => {

    const channelId = req.params.channelId;
    if (allowedChannels.includes(channelId)) {
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&type=video&channelId=${channelId}&key=${process.env.YTAPIKey}`;
        request.get({ url: url, json: true }, (error, response, body) => {
            //console.log(response);
            let items = response.body.items.map(item => {
                return {
                    "id": item.id.videoId,
                    "title":item.snippet.title,
                    "description":item.snippet.description,
                    "publishedAt":item.snippet.publishedAt
                };
            });
            res.send(items);
        });
    }
    else {
        res.status(422).json({ status: 422, message: "This API doesn't support all the channels due to API limits." });
    }
    // future Format [{
    //     "title": url,
    //     "description": "Test desc",
    //     "id": "345"
    // }]
});
// start the Express server
app.listen(port, () => {
    console.log(process.env.PORT);
    console.log(`server started at http://localhost:${port}`);
});
