const express = require('express')
const router = express.Router()    // express의 라우터 사용

router.get('/',(req,res)=>{
    res.send("index router")
})

module.exports = router;

