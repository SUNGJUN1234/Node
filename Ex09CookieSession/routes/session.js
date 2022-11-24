const express = require('express')
const router = express.Router()

// 세션 생성하기
router.get('/setSession',(req,res)=>{

    req.session.nickname = '성준'
    req.session.today = 'today'
    res.send('세션생성!')

})

// 세션에 저장된 값을 응답
router.get('/getSession',(req,res)=>{
    res.send('닉네임'+req.session.nickname);
})

// 세션 삭제
router.get('/deleteSession',(req,res)=>{
    // 세션 전체 삭제
    req.session.destroy();
    res.send('세션삭제!')

    // 한개만 따로 삭제하는 방법은 없기 때문에
    // 원하는 세션 하나의 값을 빈값으로 넣어주는 방법을 사용한다
    // req.session.nickname = '';
})

module.exports = router

