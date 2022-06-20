let express = require('express');
let app = express();

app.use(express.static(__dirname+'/dist/directorydigital'));
app.get('/*', (req, resp)=> {
  resp.sendFile(__dirname+'/dist/directorydigital/index.html');
});

app.listen(process.env.Port || 8080);
