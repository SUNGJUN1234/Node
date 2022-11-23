const express = require('express')
const router = express.Router()
// 쿠키 설정
router.get('/setCookie',(req,res)=>{
    let nickname = '성준'
    
    res.cookie('nickname',nickname,{
        // 지금부터 얼마나 살아있을지
        maxAge : 100000000,
    })
    res.cookie('dinner','치킨',{
        // 언제 사라질지
        expires : new Date(Date.now() + 1000*60*60*24*365),
    })
    res.send('쿠키생성')
})
// 쿠키 확인
router.get('/getCookies',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
    // res.send(req.cookies.nickname)
    // res.send(req.cookies.dinner)
})
// 쿠키 삭제
router.get('/deleteCookie',(req,res)=>{
    res.clearCookie('dinner');
    res.send('dinner쿠키삭제')
})
module.exports = router




