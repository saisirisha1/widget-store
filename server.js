//Install express server
const express = require('express');

const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/widget-store-web'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/widget-store-web/index.html'));
});

console.log('PATH-->',__dirname);
// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));


