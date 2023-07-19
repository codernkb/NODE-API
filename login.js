app.post('/login',async (req, res,next) => {
  const { email, password } = req.body;
  if (email && password) {
    const user =await  Register.findOne({ email:email }).lean();
  console.log(user)
    if (user && user._id){
    bcrypt.compare(password, user.password).then(async match=>{
      if(match){
        let token=await jwt.sign({user:user},process.env.SECREAT_KEY,{expiresIn:"24h"})
        res.status(200).json({
          success:true,
          message:"login successfull",
          result:{
            user:user,
            jwt:token
          }
        })
      }
      else{
        res.status(400).json({
          success:false,
          message:"password incorect"
        })
      }
    })
   }
   else{
    res.json({"user":"user"})
   }
  } else {
    res.status(400).send({
      success: false,
    });
  }
 
});