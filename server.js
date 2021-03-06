//Install express server
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || '8080';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/directorydigital'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/directorydigital/'}),
);

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
