const express = require('express');

const app = express();
const { response } = require('express');
app.use(express.urlencoded({ extended: true }));
let db;
//몽고 DB 연결
const MongoClient = require('mongodb').MongoClient;
const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 3000');
});
