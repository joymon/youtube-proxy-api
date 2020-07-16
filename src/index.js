const express = require( "express" );
const app = express();
const port = process.env.PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.get( "/api/envs/:keyName", ( req, res ) => {
    res.send( "Hello world!"+ process.env[req.params.keyName] );
} );
// start the Express server
app.listen( port, () => {
    console.log(process.env.PORT);
    console.log( `server started at http://localhost:${ port }` );
} );
