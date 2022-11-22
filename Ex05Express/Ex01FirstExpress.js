const express = require('express')

// 어플리케이션 생성
const app = express();

// get : get요청 받는다!
app.get('/',(req,res)=>{        // root로 get 요청시
    res.send('Hello World!')    // 이렇게 하겠다
});

app.listen(8888,()=>{
    // 8888포트로 오는 요청 기다림
    console.log('8888포트에서 서버 연결 대기중..');
})

