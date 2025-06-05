const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
               UserName:{type:String,required:true},
               email:{type:String,required:true},
               password:{type:String,required:true},
               ProfilePic:{type:String},
               isVerified:{type:Boolean},
               verifyToken:{type:String}
})

const User = mongoose.model('User',UserSchema);
module.exports = User;