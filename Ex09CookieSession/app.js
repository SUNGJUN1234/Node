const express = require('express')
// 쿠키 사용을 위한 import
const cookieRouter = require('./routes/cookie')
const cookieParser = require('cookie-parser')
// 세션 사용을 위한 import
const sessionRouter = require('./routes/session')
const session = require('express-session')
const fileStore = require('session-file-store')(session)

// 여러 사람을 위한 세션을 만드려면 하나의 스토리지가 필요하다

const app = express();

app.set('port',process.env.PORT||8888)

app.use(cookieParser())         // 쿠키 값 확인 시 필요

// 세션 사용 시 필요
app.use(session({
    httpOnly : true,            // http 요청으로 온것만 처리
    resave : false,             // 세션을 언제나 저장할지 설정
    secret : 'secret key',      // 세션 값을 암호화 할때의 키값 지정
    store : new fileStore()     // 여러 사용자의 세션을 저장하기 위한 저장소
}))

app.use('/c', cookieRouter)
app.use('/s',sessionRouter)


app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
