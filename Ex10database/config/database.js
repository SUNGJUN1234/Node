const mysql = require('mysql2');

const db_info = {
    host : 'localhost',
    port : '3306',          // port 번호
    user : 'test',           // 유저 아이디
    password : '1234',     // 유저 비밀번호
    database : 'testdb',    // db이름
}

module.exports = {
    init : function(){
        // 내가 가진 db정보를 이용해 db연결
        return mysql.createConnection(db_info);
    },
    connect : function(conn){
        // DB연결 시도
        conn.connect(function(err){
            if(err){
                console.error('mySql 연결 오류 : ',err)
            }else{
                console.log('mySql 연결 성공!!');
            }
        });
    }
}