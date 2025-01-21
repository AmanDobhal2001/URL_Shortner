const mongoose=require('mongoose');

    const userSchema=mongoose.Schema({

        id:{type:String,required:true,unique:true},
        
        name:{type:String,required:true},

        email:{type:String,require:true,unique:true},

        password:{type:String,required:true},

        roles:{type:String,required:true,default:'Normal'}
    },{timestamps:true});

const User=mongoose.model("user",userSchema);

module.exports=User;