import jwt from 'jsonwebtoken'
// import { User } from '../model/authmodel';

export const checktoken = async (req,res,next) => {
  const token = req.header('Authorization');
  if(!token){
    return res.status(401).json({message:"Unauthorized http, token not provided"});
  }
  const jwttoken = token.replace('bearer','').trim();
  try{
   const verified = jwt.verify(jwttoken,process.env.SECRET)
  //  const userdata = await User.findOne({email:verified.email}).select({
  //   password:0,
  //  });
   req.user = verified;
   req.token = token;
   req.userid = verified.userid;
   
   next();
  }catch(error){
  return res.status(401).json({msg:'Unauthorized Invalid token.'});
  }
}

