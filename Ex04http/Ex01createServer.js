// 노드 작성 시 응답을 받기위해서는 보통 
// http 모듈을 사용한다
const http = require('http');   // 웹 브라우저의 요청/응답 처리

http.createServer((req,res)=>{
    // 응답코드 : 200 / 404 / 500 ...
    
    // 응답 정보 기록
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // 클라이언트로 보낼 데이터, 본문
    res.write('<h1>Hello World</h1>');
    // 응답 종료
    res.end('<p>node.js</p>');

})  // listen 메서드 사용해서 콜백함수 넣는 방식
    .listen(8888, ()=>{
        // 서버 연결 대기 동안 뭘 할건지
        console.log('8888번 포트에서 서버 연결 대기중!')
    })