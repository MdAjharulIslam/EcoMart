import user from "../models/user.js";

// update user cartData : /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;

    
    if (!userId || !cartItems) {
      return res.json({
        success: false,
        message: "Missing userId or cartItems.",
      });
    }

    
    const updatedUser = await user.findByIdAndUpdate(
      userId,
      { cartItems },
      { new: true }
    );

    if (!updatedUser) {
      return res.json({
        success: false,
        message: "User not found.",
      });
    }

    
    res.json({
      success: true,
      message: "Cart updated successfully",
      user: updatedUser, 
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
