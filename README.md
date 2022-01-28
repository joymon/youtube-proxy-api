# youtube-proxy-api
Proxy api to hide the YouTube API internals and version changes

# Use cases
- If the client dont support or have restrictions in keeping API key
- Abstract client from YouTube API changes. Currently YouTube API is in version 3 and APIs are considerably different.

# Deployment

NodeJS application. You can host it anywhere. 

Currently hosted at [Heroku](https://youtube-proxy-api.herokuapp.com/)

Sample API URL to get Channel videos
[https://youtube-proxy-api.herokuapp.com/api/channels/UCzYqSifCwLYpmgRxvNo7BzA/videos](https://youtube-proxy-api.herokuapp.com/api/channels/UCzYqSifCwLYpmgRxvNo7BzA/videos)

> Due to APi limits, the above deployment works only for certain channels. If you need to access for different channel, better host yourselves.
