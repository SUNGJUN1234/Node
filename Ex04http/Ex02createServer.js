const http = require('http')

// 서버만 따로 만들어 변수에 넣어두기
const server = http.createServer((req,res)=>{
    // 응답 정보 기록
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // 클라이언트로 보낼 데이터, 본문
    res.write('<h1>Hello World</h1>');
    // 응답 종료
    res.end('<p>node.js</p>');
});

server.listen(8888);    // 포트번호 지정

// 이벤트 리스너 붙이는 방법
server.on('listening', ()=>{
    console.log('8888번 포트에서 서버 연결 대기중...')
})

// 에러 발생 시 콘솔에 에러 띄우기
server.on('error',(error)=>{
    console.log(error);
})