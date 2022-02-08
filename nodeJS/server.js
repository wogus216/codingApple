const express = require('express');
const app = express();
const { response } = require('express');
app.use(express.urlencoded({ extended: true }));
let db;
//몽고 DB 연결
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
require('dotenv').config();
//method-override html에서 put/delete 가능
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
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

// //
// 누군가가 /pet으로 방문을 하면..
// pet 관련된 안내문을 띄어주자

app.get('/pet', function (req, res) {
  res.send('펫용품 쇼핑 페이지임.');
});

app.get('/beauty', function (req, res) {
  res.send('뷰티용품 쇼핑 페이지임.');
});
// / 은 기본 주소
app.get('/', function (req, res) {
  console.log('req', req);
  res.render('index.ejs');
});

app.get('/write', (req, res) => {
  console.log('req', req);
  res.render('write.ejs');
});

// 어떤 사람이 /add 경로로 POST요청을 하면...??를 해주세요~
app.post('/add', (req, res) => {
  console.log('req', req.body);
  res.send('전송완료');
  // 카운터라는 파일을 찾아 name 중 게시물 갯수라는 찾는다.
  db.collection('counter').findOne(
    { name: '게시물갯수' },
    function (err, result) {
      console.log('result :', result.totalPost);
      //총 게시물 갯수를 변수에 저장
      let postCnt = result.totalPost;
      // DB에 저장해주세요
      db.collection('codingApple').insertOne(
        {
          _id: postCnt + 1,
          제목: req.body.title,
          내용: req.body.text,
          날짜: req.body.date,
        },
        function () {
          console.log('저장완료2');
          // + counter라는 콜렉션에 있는 totalPost라는 항목도 1 증가 시켜야 됨
          // set은 변경할 때 사용하는 연산자;
          // inc는 기존 값에 더해줄 값
          db.collection('counter').updateOne(
            { name: '게시물갯수' },
            { $inc: { totalPost: 1 } },
            function (err, result) {
              if (err) return console.log(err);
            }
          );
        }
      );
    }
  );
});

// /list로 접속하면 GET요청으로 접속하면
// 실제 DB에 저장된 데이터들로 예쁘게 HTML을 보여줌
app.get('/list', function (req, response) {
  // 디비에 저장된 post라는 collection안의 제목이 뭐인 데이터를 꺼내주세요
  db.collection('codingApple')
    .find()
    .toArray(function (error, res) {
      console.log('결과', res);
      response.render('list.ejs', { posts: res });
    });
});

app.get('/search', (res, response) => {
  console.log(res.query);

  db.collection('codingApple')
    .find({ 제목: res.query.value })
    .toArray((err, result) => {
      console.log('검색결과', result);
      response.render('search.ejs', { posts: result });
    });
});

// app.get('/search', (요청, 응답) => {
//   console.log(요청.query);
//   db.collection('post')
//     .find({ 제목: 요청.query.value })
//     .toArray((에러, 결과) => {
//       console.log(결과);
//       응답.render('search.ejs', { posts: 결과 });
//     });
// });

app.delete('/delete', function (req, response) {
  console.log('delete', req.body);
  // 문자열 정수로 변환
  req.body._id = parseInt(req.body._id);
  db.collection('codingApple').deleteOne(req.body, function (err, result) {
    console.log('삭제완료');
    response.status(200).send({ message: '성공했습니다.' });
  });
});

//detail로 접속하면 detail.ejs 로 보여줌'

app.get('/detail/:id', function (req, response) {
  db.collection('codingApple').findOne(
    //파라미터 중 :id라는 뜻
    { _id: parseInt(req.params.id) },
    function (err, result) {
      if (err) return next(err);
      console.log('result', result);
      response.render('detail.ejs', { data: result });
    }
  );
});

// 수정
app.get('/edit/:id', function (req, response) {
  db.collection('codingApple').findOne(
    { _id: parseInt(req.params.id) },
    function (err, result) {
      if (err) return next(err);
      console.log('result', result);
      response.render('edit.ejs', { post: result });
    }
  );
});

app.put('/edit', function (req, response) {
  db.collection('codingApple').updateOne(
    { _id: parseInt(req.body.id) },
    {
      $set: { 제목: req.body.title, 내용: req.body.text, 날짜: req.body.date },
    },
    function (err, result) {
      console.log('수정완료');
      response.redirect('/list');
    }
  );
  // 폼에 담긴 데이터를 가지고
  // db.collection 에다가 업데이트 함
});
//로그인 구현
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
// 미들웨어
app.use(
  session({ secret: '비밀코드', resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (req, response) {
  response.render('login.ejs');
});

app.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/fail',
  }),
  function (req, response) {
    response.redirect('/');
  }
);

app.get('/mypage', loginTry, function (req, response) {
  console.log(req.user);
  response.render('mypage.ejs', { user: req.user });
});

function loginTry(req, response, next) {
  if (req.user) {
    next();
  } else {
    response.send('로그인 안하셨는데요?');
  }
}

passport.use(
  new LocalStrategy(
    {
      // name 속성
      usernameField: 'id',
      passwordField: 'pw',
      session: true,
      passReqToCallback: false,
    },
    function (입력한아이디, 입력한비번, done) {
      //console.log(입력한아이디, 입력한비번);
      db.collection('login').findOne(
        { id: 입력한아이디 },
        function (에러, 결과) {
          if (에러) return done(에러);

          if (!결과)
            return done(null, false, { message: '존재하지않는 아이디요' });
          if (입력한비번 == 결과.pw) {
            return done(null, 결과);
          } else {
            return done(null, false, { message: '비번틀렸어요' });
          }
        }
      );
    }
  )
);
//id를 이용해서 세션을 저장시키는 코드(로그인 성공시 발동)
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
//이 세션 데이터를 가진 사람을 DB에서 찾아주세요(마이페이지 접속 시 발동)
passport.deserializeUser(function (아이디, done) {
  // 디비에서 위에 있는 user.id로 유저를 찾은 뒤에 유저 정보를
  db.collection('login').findOne({ id: 아이디 }, function (err, result) {
    done(null, result);
  });
});

app.use(function (req, res, next) {
  res.status(404).send('404');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500번대에러');
});
