const { request } = require('express');
const express = require('express')
const indexRouter = require('./routes')         // indexRouter
// app.js에서는 sequelize만 필요하다 (User는 필요X)
const {sequelize} = require('./models')         // ./models/index

const session = require('express-session')
const fileStore = require('session-file-store')(session)

// 모든 요청은 app을 거쳐서 오기 때문에 app에 
// 적용시켜주면 그 아래것들은 자동으로 추기된다
const bodyParser = require('body-parser')

const app = express();

app.set('port',process.env.PORT||8888)

// urlencoded : form 데이터를 받아올 때 사용
app.use(bodyParser.urlencoded({extended:false}))
// json : json데이터를 받아올 때 사용
app.use(bodyParser.json())
// 세션 관련
app.use(session({
    // 세션을 사용할 때 가장 먼저  세션을 암호화할 때 사용되는 키를 적어줘야한다
    secret : 'secret key',
    store : new fileStore()
}))

app.use('/',indexRouter)

// force : 서버를 실행할 때 마다 테이블을 재생성 할 것인지 아닌지
sequelize.sync({force : false})
    .then(()=>{
        console.log('DB연결 성공')
    })
    .catch((err)=>{
        console.error(err)
    })

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
