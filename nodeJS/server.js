const experss = require('express');
const app = experss();

app.listen(8080, function(){
    console.log('싼쵸')
});

// // 
// 누군가가 /pet으로 방문을 하면..
// pet 관련된 안내문을 띄어주자

app.get('/beauty', function(req, res){
    res.send('뷰티용품 쇼핑 페이지임.')

})