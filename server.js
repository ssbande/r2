const express = require('express');
const app = express();
const path    = require("path");

app.use(express.static('./src/client/public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/src/client/app/index.html')));
let server = app.listen(4044, () => {
    console.log('server running on 4044');
});