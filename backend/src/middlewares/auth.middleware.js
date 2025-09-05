const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findById(decoded.id);
        if (!foodPartner) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }   
        req.foodPartner = foodPartner; // Attach food partner info to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}


module.exports = { authFoodPartnerMiddleware };