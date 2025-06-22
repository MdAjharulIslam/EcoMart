import Address from "../models/address.js";
import mongoose from "mongoose";

// Add address to a user: /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;

    // Log request body for debugging
    console.log(req.body);

    // Validate userId as a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId format.",
      });
    }

    // Check if the user already has an address
    const existingAddress = await Address.findOne({ userId });
    if (existingAddress) {
      return res.status(400).json({
        success: false,
        message: "User already has an address.",
      });
    }

    // Add the new address
    await Address.create({ userId, ...address });

    res.json({
      success: true,
      message: "Address added successfully",
    });
  } catch (error) {
    console.error("Error adding address:", error); // Log the full error
    res.status(500).json({
      success: false,
      message: "Error adding address",
      error: error.message, // Send detailed error message back to the client
    });
  }
};


//get address : /api/address/get
import jwt from "jsonwebtoken";

export const getAddress = async (req, res) => {
  try {
    let token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const addresses = await Address.find({ userId });

    res.json({
      success: true,
      addresses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting address",
      error: error.message,
    });
  }
};

