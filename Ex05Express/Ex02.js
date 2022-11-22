const express = require('express')
const app = express();

// app.set('key',value) : 키에 값을 저장하도록 설정
                // 기본포트가 있다면 그 번호로 포트를 쓰겠다
                // 그렇지 않다면 8888을 쓰겠다
app.set('port',process.env.PORT||8888)

app.get('/home',(req,res)=> {   // 라우팅 : 경로에 따라 다르게 요청하는 것
    // http 모듈 -> html 파일을 응답하기 위해서 필요 -> fs모듈
    
    // __dirname : 현재파일의 경로
    res.sendFile(__dirname+'/Ex02.html') // 파일 응답
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
