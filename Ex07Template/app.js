const express = require('express')
// 넌적스 템플릿 엔진 사용
const nunjucks = require('nunjucks');
// index 모듈 가져오기 ('/index'는 생략 가능)
const indexRouter = require('./routes')
const app = express();

app.set('port',process.env.PORT||8888)
// nunjucks = 'njk' / 'html'
app.set('view engine','html')
// 인덱스 라우터 루트 설정
app.use('/',indexRouter)

// 넌적스가 앱을 사용할 수 있게끔 서로 연결
nunjucks.configure('views',{
    express : app,  // app 객체 연결
    watch : true,   // html 파일이 연결되면 템플릿 엔진을 다시 렌더링
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 연결 대기중..")
})
