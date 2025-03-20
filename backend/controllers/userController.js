import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser=async(req,res)=>{
    const { email, password } = req.body;
    try {
        //check if user exists
        const user = await userModel.findOne({ email }); 
        if (!user) {
            return res.json({ success:false, message: "User doesn't exist" });
        }       

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success:false, message: "Invalid credentials" });
        }

        //create token
        const token = createToken(user._id);
        res.json({ success:true, token});

    } catch (error) {
        console.log(error);
        return res.json({ success:false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
};
    


//register user
const registerUser=async(req,res)=>{
    const { name, email, password } = req.body;
    try{
        //check if user already exists
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.json({ success:false, message: "User already exists" });
        }
        //validate user input
        if (!validator.isEmail(email)) {
            return res.json({ success:false, message: "Please enter a valid email"});
        }
        
        if (password.length < 8) {
            return res.json({ success:false, message: "Password must be atleast 8 characters"});
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new userModel({ name: name, email: email, password: hashedPassword });

        //save user to db           
        const user = await newUser.save();

        //create token
        const token = createToken(user._id);
        res.json({ success:true, token});

    } catch(error){
        console.log(error);
        return res.json({ success:false, message: "Error" });
    }
}

export { loginUser,registerUser };