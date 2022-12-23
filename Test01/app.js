const { request } = require('express');
const express = require('express')
const indexRouter = require('./routes')    
const {sequelize} = require('./models')   

const session = require('express-session')
const fileStore = require('session-file-store')(session)

const bodyParser = require('body-parser')

const app = express();

app.set('port',process.env.PORT||8888)

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(session({
    secret : 'secret key',
    store : new fileStore()
}))

app.use('/',indexRouter)
// app.use('/book',indexRouter)

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
