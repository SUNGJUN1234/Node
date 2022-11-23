const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('loginForm');
})

router.post('/login',(req,res)=>{
    
    let id = req.body.id
    let pw = req.body.pw

    if(id==='test' && pw=='12345'){
        res.render('loginSuccess',{ID:id})
    }else{
        res.render('loginFail')
    }
})

module.exports = router
