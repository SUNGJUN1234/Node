// 라우터
const express = require('express')

// 라우터 사용
const router = express.Router()

// 유저 모듈 가지고오기
const User = require('../models/user')

// 회원가입 기능 만들기
router.post('/insert', async(req,res,next)=>{
    // id, pw, age 데이터 받기
    console.log(req.body)
    let {id,pw,age} = req.body;
    try{
        // User에서 만들어진 객체를 만들어 사용하겠다 (ORM은 함수만 사용)
        const user = await User.create({     // user에는 삽입된 데이터가 반환된다
            // DB에서 테이블을 만들 때 적었던 컬럼이름이 key값이 된다
            id:id,      // 컬럼 이름 : 저장되는 실제 값(변수이름)
            pw:pw,
            age:age
        })   
        res.json(user)  // 삽입된 데이터를 그대로 응답
    }catch(err){
        next(err)       // 에러처리해주는 미들웨어
    }
})
// user 모든 값 조회(get방식을 주로 사용한다)
router.get('/selectall', async(req,res,next)=>{
    try{
        // 객체가 가지고 있는 모든 값을 가져오려면 객체명.findAll
        const users = await User.findAll()

        res.json(users)
    }catch(err){
        next(err)
    }
})
// 객체의 값 하나만 조회하기
router.get('/select/:id', async(req,res,next)=>{
    try{
        // 객체가 가진 값 하나만 가져오기 객체명.findOne
        const user = await User.findOne({
            attributes : ['id','age'],
            // 경로 안에 원하는 값이 있다면 req.params
            where : {id : req.params.id}
        })
        
        // 현재 로그인 한 사용자의 아이디와 나이가 저장된다
        req.session.login = user;
        res.json(user);

    }catch(err){
        next(err)
    }
})
// 수정 : patch / update
// 데이터는 바디에 실어서 주자
router.patch('/update',async(req,res,next)=>{
    console.log(req.body);
    try{
        // 무슨 값으로 수정할지? 
        // 어떤 아이디가 있는 값을 수정할지?
        const result = await User.update({
            // 무엇으로 수정할 건지
            pw : req.body.pw,
            age : req.body.age
        },{
            // 어떤 아이디를 수정할지
            where : {id : req.session.login.id} // 현재 로그인하여 session에 저장된 id의 값을 가지고있는 컬럼을 수정하겠다
        })
        res.json(result)
    }catch(err){
        next(err)
    }
})

router.delete('/delete/:id',async(req,res,next)=>{
    try{
        const result = await User.destroy({
            where : {id : req.params.id}
        })
        res.json(result)
    }catch{
        next(err)
    }
})


module.exports = router