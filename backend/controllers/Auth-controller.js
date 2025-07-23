const User=require('../modal/Auth-modal')
const bcrypt=require('bcryptjs')

//SignupLogic

const userSignup=async(req,res)=>{
   try {

      const{name,userId,email,password}=req.body

       console.log("Received body:", req.body); 

       const userExist = await User.findOne({email});

      if(userExist){
         return res.status(400).json({ message: "User already exists" });
      }

      const userCreate=await User.create({
        name,
        userId,
        email,
        password
      })

      const token= await userCreate.generateToken()
       res.status(201).json({message:"User created successfully",token,user:userCreate});
        console.log("User created successfully",userCreate);

   } catch (error) {
    res.status(500).json({message:"Internal server error",error:error.message});
   }
}

//Function to handle login

const userLogin=async(req,res)=>{
    try {

        const { email, password } = req.body;

         if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email." });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        const token = await user.generateToken();
        res.status(200).json({message:"Login successful",token,user});
        console.log("User logged in successfully",user);


    } catch (error) {
         res.status(500).json({message:"Internal server error",error:error.message});
    }
}

module.exports={userLogin,userSignup}