app.post('/registerHere',
  middleware.validateUser
, async (req, res) => {
    const { name, email, password, conpassword } = req.body
    const register = await   Register.findOne({email:email});
    if(register&&register._id){
      res.status(400).json({
        success:false,
        message:"user already exist",
        result:""
      })
    }
    else{
      let user=await Register.create({
        name:name,
        email:email,
        password:password,
        conpassword:conpassword
      })
      res.status(200).json({
        success:true,
        message:"Register succesfull",
        result:user
      })
    }
    
  })