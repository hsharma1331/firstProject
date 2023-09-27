// ------------creating schema-----------

const mongoose=require('mongoose')
const mySchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        length:10-12
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})

const Register=new mongoose.model('firstC',mySchema);
module.exports=Register;