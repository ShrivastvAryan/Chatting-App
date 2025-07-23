const User=require('../modal/Auth-modal')
const bycrypt=require('bcryptjs')

//SignupLogic

const userSignup=async()=>{
   try {

      const{userId,name,email,password}=req.body

       const userExist = await User.findOne({ $or: [{ email }, { userId }] });

      if(userExist){
         return res.status(400).json({ message: "User already exists" });
      }

      const userCreate=await User.create({
        name:'',
        userId:'',
        email:'',
        password:''
      })

      const token= await userCreate.generateToken()
       res.status(201).json({message:"User created successfully",token,user:userCreated});
        console.log("User created successfully",userCreated);

   } catch (error) {
    res.status(500).json({message:"Internal server error",error:error.message});
   }
}

//Function to handle login

const userLogin=async()=>{
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