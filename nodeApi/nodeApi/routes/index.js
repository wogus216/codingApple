var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((error) => console.log(error));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function (req, res) {
  res.send('게임 게시판');
});

module.exports = router;
