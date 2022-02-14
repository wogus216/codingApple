var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
let db;
require('dotenv').config();
//몽고 DB 연결
const MongoClient = require('mongodb').MongoClient;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

MongoClient.connect(process.env.DB_URL, function (error, client) {
  // 연결되면 할일
  if (error) return console.log(error);
  //test 라는 데이터베이스 폴더에 연결해주세요
  db = client.db('test');
  //id를 항상 추가
  // db.collection('codingApple').insertOne({이름: 'sancho',_id: 100, age:20}, function(error, res){

  //     console.log('1저장완료')
  // });

  app.listen(process.env.PORT, function () {
    console.log('싼쵸 접속완료');
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
