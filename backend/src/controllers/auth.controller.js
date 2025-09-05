const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { fullname,email, password } = req.body;

  const existingUser = await userModel.findOne({
    email,
  });

  if (existingUser) {
    return res.status(409).json({
      message: "username Already Exists",
    });
  }

  const user = await userModel.create({
      fullname,
        email,
    password: await bcrypt.hash(password, 10), //10 is called SALT
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
}

async function loginController(req, res) {
  const {email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "login Successfull",
    user,
  });
}

async function getUserController(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {}
}

async function logoutController(req, res) {
  res.clearCookie("token");
  res.status(200).json({ message: "logout Successfull" });
}


async function registerFoodPartnerController(req, res) { 
  const { name, email, password } = req.body;

  const existingFoodPartner = await foodPartnerModel.findOne({
    email,
  });
  if (existingFoodPartner) {
    return res.status(409).json({
      message: "Food Partner Already Exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword //10 is called SALT
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "Food Partner created successfully",
    foodPartner,
  });
}


async function loginFoodPartnerController(req, res) {
  const { email, password } = req.body;
  const foodPartner = await foodPartnerModel.findOne({
    email,
  });
  if (!foodPartner) {
    return res.status(404).json({
      message: "Food Partner not found",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect Password",
    });
  } 
  const token = jwt.sign(
    {
      id: foodPartner._id 
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "login Successfull",
    foodPartner,
  });
}

async function logoutFoodPartnerController(req, res) {
  res.clearCookie("token");
  res.status(200).json({ message: "logout Successfull" });
}

module.exports = {
  registerController,
  loginController,
  getUserController,
  logoutController,
  registerFoodPartnerController,
  loginFoodPartnerController,
  logoutFoodPartnerController
};
