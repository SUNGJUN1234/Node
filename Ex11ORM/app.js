const express = require('express')
// app.js에서는 sequelize만 필요하다 (User는 필요X)
const {sequelize} = require('./models')         // ./models/index
const app = express();

app.set('port',process.env.PORT||8888)

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
