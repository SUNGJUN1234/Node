const express = require('express')
const router = express.Router();
const Books = require('../models/books')

router.post('/insert', async(req,res,next)=>{
    console.log(req.body)
    let {title,author,company,isbn,count} = req.body;
    try{
        const books = await Books.create({ 
            title:title,      
            author:author,
            company:company,
            isbn:isbn,
            count:count
        })   
        res.json(books)  
    }catch(err){
        next(err)       
    }
})

router.get('/book/selectall', async(req,res,next)=>{
    try{
        const books = await Books.findAll()
        res.json(books)
    }catch(err){
        next(err)
    }
})

router.get('/book/select/:num', async(req,res,next)=>{
    try{
        const books = await Books.findOne({
            attributes : ['title','author','company','isbn','count'],
            where : {num : req.params.num}
        })
        
        req.session.login = books;
        res.json(books);

    }catch(err){
        next(err)
    }
})

router.patch('/book/update/:num',async(req,res,next)=>{
    console.log(req.body);
    try{
        let {title,author,company,isbn,count} = req.body;
        const result = await Books.update({
            title:title,      
            author:author,
            company:company,
            isbn:isbn,
            count:count
        },{
            // 어떤 아이디를 수정할지
            where : {num : req.params.num} // 현재 로그인하여 session에 저장된 id의 값을 가지고있는 컬럼을 수정하겠다
        })
        res.json(result)
    }catch(err){
        next(err)
    }
})

router.delete('/book/delete/:num',async(req,res,next)=>{
    try{
        const result = await Books.destroy({
            where : {num : req.params.num}
        })
        res.json(result)
    }catch{
        next(err)
    }
})


module.exports = router