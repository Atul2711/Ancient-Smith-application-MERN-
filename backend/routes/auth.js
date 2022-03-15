const router = require("express").Router();
const User=require('../models/User')
const bcrypt = require("bcrypt");


router.post('/register',function(req,res){
    bcrypt.hash(req.body.password,10,function(err,hash){
        if(err){
            console.log(err);
        }else{
            const newUser=new User({
                username:req.body.username,
                email:req.body.email,
                password:hash
            });
        
            
            newUser.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    res.render("secrets");
                }
            });
        }
    });
});
router.post('/login',function(req,res){
    const username=req.body.email;
    const password=req.body.password;
    User.findOne(
        {email:username},
        function(err,foundUser){
            if(err){
                console.log(err);
            }else{
                if(foundUser){
                    bcrypt.compare(password,foundUser.password,function(err,result){
                        if(result===true){
                            res.render('secrets');
                        }    
                    })
                }
            }
        }
    )
}); 

module.exports = router;