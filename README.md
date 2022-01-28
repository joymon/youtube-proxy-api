# YouTube Proxy API
Proxy api to hide the YouTube API internals and version changes

# Getting started

Just call the API with .api/{channel id}/videos

Sample API URL to get Channel videos
[https://youtube-proxy-api.herokuapp.com/api/channels/UCzYqSifCwLYpmgRxvNo7BzA/videos](https://youtube-proxy-api.herokuapp.com/api/channels/UCzYqSifCwLYpmgRxvNo7BzA/videos)


## Sample response 

Currently it returns 3 records

```JavaScript
[
    {
        id: "P7kBUPIsefg",
        title: "A Day at Spring Lake Day Camp, New Jersey 2019 - Part 3",
        description: "Thanks to my company for providing a family fun day in 2019 at Spring Lake Day Camp, New Jersey. This is the third part that ...",
        publishedAt: "2021-10-02T13:00:18Z"
    },
    {
        id: "rcCjWarrTro",
        title: "A Day at Spring Lake Day Camp, New Jersey 2019 - Part 2",
        description: "Thanks to my company for providing a family fun day in 2019 at Spring Lake Day Camp, New Jersey. This is the second part that ...",
        publishedAt: "2021-09-18T14:30:06Z"
    },
    {
        id: "Lin8ixSG5Oc",
        title: "A Day at Spring Lake Day Camp, New Jersey 2019 - Part 1",
        description: "Thanks to my company for providing a family fun day in 2019 at Sprint Lake Day Camp, New Jersey. This is the first part that ...",
        publishedAt: "2021-09-11T13:00:14Z"
    }
]
```

# Use cases
- If the client doesn't support or have restrictions in keeping API key
- Abstract client from YouTube API changes. Currently YouTube API is in version 3 and APIs are considerably different.

# Deployment

NodeJS application. You can host it anywhere. 

- Currently hosted at [Heroku](https://youtube-proxy-api.herokuapp.com/)
- It uses the Heroku pipeline to deploy.

> Due to APi limits, the above deployment works only for certain channels. If you need to access for different channel, better host yourselves.
