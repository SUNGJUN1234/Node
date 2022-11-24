const express = require('express')
const router = express.Router();
const db_config = require('../config/database');

let conn = db_config.init();
db_config.connect(conn);

// index.html을 보여주는 장치
router.get('/select',(req,res)=>{
    
    let sql = 'select * from member';

    conn.query(sql,function(err,rows,fields){
        console.log(rows)
        console.log(fields)
        if(err){
            console.error('select 실행 실패! : '+err)
        }else{
            res.render('index',{list : rows})
        }
    })
})
router.post('/insert',(req,res)=>{
    // 한번에 3개의 name값 얻기
    let {id,pw,nick} = req.body

    let sql = 'insert into member values(?,?,?)';

    //각각의 ?에 값 넣어주기
    conn.query(sql, [id,pw,nick] , function(err, rows, fields){
        console.log(rows);          // 영향을 받은 row에 대한 정보
        console.log(fields);        // row에 자세한 메타데이터

        if(err){        // 실패
            console.error('insert 실행 실패! : '+err)
        }else{          // 성공
            res.redirect('/select');
            console.log('insert 실행 성공!')
        }
    })
})

module.exports = router

