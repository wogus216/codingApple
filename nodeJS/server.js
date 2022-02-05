const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
let db;
//몽고 DB 연결
const MongoClient =require('mongodb').MongoClient
app.set('view engine', 'ejs');
MongoClient.connect('mongodb+srv://sancho:1234@cluster0.bqxrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',function(error,client){
    // 연결되면 할일
    if(error)return console.log(error)
    //test 라는 데이터베이스 폴더에 연결해주세요
    db = client.db('test');
//id를 항상 추가
// db.collection('codingApple').insertOne({이름: 'sancho',_id: 100, age:20}, function(error, res){

//     console.log('1저장완료')
// });

    app.listen(8080, function(){
        console.log('싼쵸 접속완료')
    });
    
})


// // 
// 누군가가 /pet으로 방문을 하면..
// pet 관련된 안내문을 띄어주자

app.get('/pet', function(req, res){
    res.send('펫용품 쇼핑 페이지임.')

})

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지임.')

})
// / 은 기본 주소
app.get('/', function(req, res){
    console.log('req',req)
    res.sendFile(__dirname+ '/index.html')

})

app.get('/write', (req, res) => {
    console.log('req',req)
    res.sendFile(__dirname+ '/write.html')

})

// 어떤 사람이 /add 경로로 POST요청을 하면...??를 해주세요~

app.post('/add',(req,res)=>{
    console.log('req',req.body)
    res.send('전송완료')
    // DB에 저장해주세요
    db.collection('codingApple').insertOne({제목:req.body.title, 내용:req.body.text,날짜:req.body.date}, function(){
      
        console.log('저장완료2');
    });
})


// /list로 접속하면 GET요청으로 접속하면 
// 실제 DB에 저장된 데이터들로 예쁘게 HTML을 보여줌
app.get('/list',function(req,response){
// 디비에 저장된 post라는 collection안의 제목이 뭐인 데이터를 꺼내주세요
db.collection('codingApple').find().toArray(function(error,res){
    console.log('결과',res);
    response.render('list.ejs',{posts: res});
});
    
})