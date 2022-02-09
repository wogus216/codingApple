let router = require('express').Router();

router.get('/shirts', function (req, response) {
  response.send('셔츠 파는 페이지 입니다.');
});

router.get('/pants', function (req, response) {
  response.send('바지 파는 페이지 입니다.');
});

//module.exports = 내보낼 변수명
module.exports = router;
