const express = require('express')

// post 방식에서 body에 담긴 값을 얻기 위한 모듈
const bodyParser = require('body-parser')

const app = express();

// bodyParser 미들웨어 추가 (확장기능이기에 {extended:true} 해주기 )
app.use(bodyParser.urlencoded({extended:true}))

app.set('port',process.env.PORT||8888)

app.get('/get',(req,res)=>{
    // user?number=1 -> queryString
    // get방식의 쿼리스트링으로 값을 주고 받아보자
    let id = req.query.id;
    let pw = req.query.pw;

    // user/1 -> parameter
    // 파라미터로 값을 주고 받는 방법
    // let id = req.params.id
    // let pw = req.params.pw

    res.send('id : '+id +'pw : '+pw);
})

app.post('/post',(req,res)=>{

    // post 방식은 정보가 body에 담겨있다
    let id = req.body.id;
    let pw = req.body.pw;

    res.send('id : '+id +'pw : '+pw);
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
