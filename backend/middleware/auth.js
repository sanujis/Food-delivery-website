import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    if(!token) {
        return res.status(401).json({message: "Unauthorized"});
    }
    try{
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
    }catch(err) {
        console.log(err);
        res.json({success:false, message: "Invalid token"});
    }

}

export default authMiddleware;