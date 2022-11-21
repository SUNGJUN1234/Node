const fs = require('fs').promises;
// fs모듈을 promise 형식으로 바꿔서 사용(비동기방식)

fs.readFile('./readme.txt')
    .then((data)=>{ // 기본적으로 buffer 형식으로 제공
        console.log(data.toString());
    })
    .catch((err)=>{ // 에러 상황 감지
        console.error(err);
    })