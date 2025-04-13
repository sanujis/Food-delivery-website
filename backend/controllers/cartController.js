import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
     try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cart;
        if (!cartData[req.body.itemId]) {
           cartData[req.body.itemId] = 1;
        }
        else{
              cartData[req.body.itemId].quantity += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({ success: true, message: "Item added to cart" });
     } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding item to cart" });
     }
}

const removeFromCart = async (req, res) => {
   try {
     let userData = await userModel.findById(req.body.userId);
     let cartData = await userData.cartData;
     if (cartData[req.body.itemId] > 1) {
       cartData[req.body.itemId] -= 1;
     } else {
       delete cartData[req.body.itemId];
     }
     await userModel.findByIdAndUpdate(req.body.userId, { cartData });
     res.json({ success: true, message: "Removed from Cart" });
   } catch (error) {
     console.log(error);
     res.json({ success: false, message: "Error" });
   }
 };

 const getCart = async (req, res) => {
   try {
     let userData = await userModel.findById(req.body.userId);
     let cartData = await userData.cartData;
     res.json({ success: true, cartData: cartData });
   } catch (error) {
     console.log(error);
     res.json({ success: false, message: "Error" });
   }
 };
 

export { addToCart, removeFromCart, getCart };