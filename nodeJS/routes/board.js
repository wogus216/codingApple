let router = require('express').Router();

function loginTry(req, response, next) {
  if (req.user) {
    next();
  } else {
    response.send('로그인 안하셨는데요?');
  }
}
router.use(loginTry);
router.get('/sports', function (req, response) {
  response.send('스포츠 게시판');
});

router.get('/game', function (req, response) {
  response.send('게임 게시판');
});

module.exports = router;
