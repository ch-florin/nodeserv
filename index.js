const fs = require('fs');
const cors = require('cors');
const express = require('express');
const Kairos = require('kairos-api');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
const request = require('request');
const rp = require('request-promise');
const Base64 = require('js-base64').Base64;
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const multipartMiddleware = multipart();

app.get('/test', (req,res)=>{
   res.send({"test":"yes"});
})
app.get('/', (req,res)=>{
   res.send({"test":"home"});
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))