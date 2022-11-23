const express = require('express')
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser')
const indexRouter = require('./routes')

const app = express();

app.set('port',process.env.PORT||8888)
app.set('view engine','html')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',indexRouter)

// 넌적스가 앱을 사용할 수 있게끔 서로 연결
nunjucks.configure('views',{
    express : app,  // app 객체 연결
    watch : true,   // html 파일이 연결되면 템플릿 엔진을 다시 렌더링
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
