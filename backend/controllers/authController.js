import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;
  //validate
  if (!firstName) {
    next("First Name is required");
  }
  if (!lastName) {
    next("Last Name is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Password is required and must be greater than 6 characters");
  }
  if (!role) {
    next("Choose a role that fits your requirements");
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email already exists, Please login");
  }
  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password,
    role,
  });
  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please provide all fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid username or paassword");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid username or paassword");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user,
    token,
  });
};
