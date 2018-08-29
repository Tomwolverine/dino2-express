const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
const dinosaurs = require('./dinosaurs');
app.use(cors());
app.use(bodyParser.json());
app.get( '/', (request, response, next) => {
    response.json({dinosaurs});
})

app.listen(port, ( ) => { console.log(`I am listening on ${port}`) })