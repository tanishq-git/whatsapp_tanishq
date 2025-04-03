import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageurl:{type:String,required:true}
}, { timestamps: true });


UserSchema.pre('save',async function(next) {
  const user = this;
  if(!user.isModified('password')){
    next();
  }  
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(user.password,salt);
    user.password = hashpassword;
  } catch (error) {
    console.log('password is not hash')
  }
})

//jsonwebtoken 
UserSchema.methods.generatetoken = async function (){
  try {
  return jwt.sign({
        userid:this._id.toString(),
        email:this.email,
    },process.env.SECRET,{expiresIn:"30d"});
  //  res.cookie('jwt',token,{httpOnly:true,secure:true,sameSite:'strict'})
  } catch (error) {
    console.log('token is not generating error')
  }
}

export const User = mongoose.model("User", UserSchema);

