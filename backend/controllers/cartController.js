import userModel from "../models/userModel.js";

// add to user cart  
const addToCart = async (req, res) => {
   try {
      const userId = req.body.userId;
      const itemId = req.body.itemId;

      let userData = await userModel.findById(userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      let cartData = userData.cartData || {}; // Ensure cartData is not null or undefined
      if (!cartData[itemId]) {
         cartData[itemId] = 1;
      } else {
         cartData[itemId] += 1;
      }

      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Added to cart" });
   } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ success: false, message: "Error adding to cart" });
   }
};

// remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      const userId = req.body.userId;
      const itemId = req.body.itemId;

      let userData = await userModel.findById(userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      let cartData = userData.cartData || {}; // Ensure cartData is not null or undefined
      if (cartData[itemId] > 0) {
         cartData[itemId] -= 1;
         if (cartData[itemId] === 0) {
            delete cartData[itemId];
         }
      } else {
         return res.status(400).json({ success: false, message: "Item not in cart" });
      }

      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Removed from cart" });
   } catch (error) {
      console.error("Error removing from cart:", error);
      res.status(500).json({ success: false, message: "Error removing from cart" });
   }
};

// get user cart
const getCart = async (req, res) => {
   try {
      const userId = req.body.userId;

      let userData = await userModel.findById(userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      let cartData = userData.cartData || {}; // Ensure cartData is not null or undefined
      res.json({ success: true, cartData: cartData });
   } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ success: false, message: "Error fetching cart" });
   }
};

export { addToCart, removeFromCart, getCart };
