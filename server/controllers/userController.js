require('dotenv').config();
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.login = async(req,res,next) => {
    if(req.body.loginData.data.username !== '' &&
        req.body.loginData.data.password !== ''){
        const user = User.findOne({email:req.body.loginData.data.username},(err,doc)=>{
            if(doc){
                bcrypt.compare(req.body.loginData.data.password,doc.password,(err,result)=>{
                  console.log(result)
                    if(result===true){
                        res.status(200).send({response:{
                                status:1,
                                message: "Valid user record",
                                userData:{
                                    name:doc.name,
                                    email:doc.email
                                }
                            }})
                    }else{
                        res.status(200).send({response:{
                                status:0,
                                message: "Invalid Credentials"
                            }})
                    }
                })
            }else {
                res.status(400).send( {response:{
                        status:0,
                        message: "Invalid Credentials"
                    }})
            }
        });
    }

}

exports.register= async(req,res,next)=>{

    if(req.body.userInfo){

        const userData = req.body.userInfo.data;

        if(userData.name!=='' &&
            userData.email!=='' &&
            userData.password.length >= 6){

            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(userData.password,salt,(err,hash)=>{
                    const user = new User({
                        name:userData.name,
                        email:userData.email,
                        password:hash
                    })

                    user.save()
                        .then(result=>{
                            res.status(201).send({response:{
                                    status:true,
                                    message:"Record SuccessFully Saved"
                                }})
                        })
                        .catch(error=>{
                            res.status(400).send({response:{
                                    status: false,
                                    message: "Unable to save record"
                                }})
                        })
                })
            })

        }else{
            res.status(400).send({response:{
                status:false,
                message:"All fields are required and password must be >6 characters"
            }})
        }


    }else{
      res.status(400).send({response:{
          status:false,
          message:"An error has occured"
        }})
    }
}
