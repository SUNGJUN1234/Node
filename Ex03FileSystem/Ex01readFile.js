// fs = FileSystem
const fs = require('fs');

fs.readFile('./readme.txt', (err,data)=>{
    if(err){    // 에러가 발생했을 때 예외처리
        throw err;
    }

    // 결과물은 buffer(메모리에 저장된 데이터) 형식으로 제공
    console.log(data);
    // buffer형식으로는 사용할 수 없으니 String으로 바꿔주자
    console.log(data.toString());
})