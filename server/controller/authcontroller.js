import {User} from '../model/authmodel.js'
import bcrypt from 'bcrypt'

//..............singup................
export const signup = async (req,res) => {
     const {fullname,email,password,imageurl,newpassword} = req.body;
     try {
        if(password !== newpassword){
            return res.status(400).json({error:"Passwords do not match"});
         }
         
         const user = await User.findOne({email});
         if(user){
            return res.status(400).json({error:'User already registered'});
         }
         
         const newuser = await new User({
            fullname,
            email,
            password,
            imageurl,
         });
         await newuser.save();
         res.status(201).json({msg:"user created successfully",userdata:{_id:newuser._id,fullname:newuser.fullname,email:newuser.email,imageurl:newuser.imageurl},token:await newuser.generatetoken(),userid:newuser._id.toString()})
      
     } catch (error) {
         console.log('error from signup',error)
         res.status(500).json({error : "something went wrong"})
     }
}

export const login = async (req,res) => {
   try {
      const {email,password} = req.body;
      const user = await User.findOne({email:email});
      const ismatch = await bcrypt.compare(password,user.password);

      if(!user || !ismatch){
         return res.status(400).json({error:'Invalid user credential'});
      }

      res.status(200).json({msg:"user login successfully",userdata:{_id:user._id,fullname:user.fullname,email:user.email,imageurl:user?.imageurl},token:await user.generatetoken()})

   } catch (error) {
      console.log(error);
      res.status(500).json({error:"Internal server error"})
   }
}

//logout 
export const logout = async (req,res) =>{
  try {
   res.clearCookie('jwt');
   res.status(200).json({msg:'user logged out successfully'})
  } catch (error) {
   console.log(error);
   res.status(500).json({error:"Internal server error"})
  }
}

//alluser 

export const users =  async  (req,res) =>{
  try {
   const loggedinuser = req.userid;
   const data = await User.find({_id:{$ne:loggedinuser}}).select({password:0});
   res.status(200).json(data)
  } catch (error) {
   console.log(error);
   res.status(500).json({error:"Internal server error"})
  }
}