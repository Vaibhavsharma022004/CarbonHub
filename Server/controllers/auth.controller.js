const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const ngoModel = require("../models/ngoModel");
const otpValidation = require("../helper/otpValidation");
const otpModel = require("../models/otpModel");
const { sendMail } = require("../helper/sendMail");
const { errorHandler } = require("../utils/error");

const signUp = async (req, res, next) => {
  const { userName, userEmail, password, individual } = req.body;
  try {
    if (individual) {
      const user = await userModel.findOne({ username: userName });
      if (user)
        return res.status(400).json({ error: "Username already exists" });
      const email = await userModel.findOne({ email: userEmail });
      if (email) return res.status(400).json({ error: "Email already exists" });
      const newUser = new userModel({
        username: userName,
        email: userEmail,
        password: password,
      });
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      console.log(newUser);
      res.status(201).json({ newUser });
    } else {
      const org = await ngoModel.findOne({ username: userName });
      if (org)
        return res.status(400).json({ error: "Username already exists" });
      const email = await ngoModel.findOne({ email: userEmail });
      if (email) return res.status(400).json({ error: "Email already exists" });
      const newOrg = new ngoModel({
        username: userName,
        email: userEmail,
        password: password,
      });
      const salt = await bcrypt.genSalt(10);
      newOrg.password = await bcrypt.hash(password, salt);
      await newOrg.save();
      res.status(201).json({ newOrg });
    }
  } catch (error) {
    console.log(error.message);
    next(errorHandler(error.message, 500));
  }
};

const signIn = async (req, res, next) => {
  const { email, password, individual } = req.body;
  try {
    if (individual) {
      const user = await userModel.findOne({ email: email });
      if (!user) return res.status(400).json({ error: "Email does not exist" });
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(400).json({ error: "Password is incorrect" });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res
        .send({
          success: true,
          token: token,
          userData: user,
        })
        .status(200);
    } else {
      const org = await ngoModel.findOne({ email: email });
      if (!org) return res.status(400).json({ error: "Email does not exist" });
      const validPassword = await bcrypt.compare(password, org.password);
      if (!validPassword)
        return res.status(400).json({ error: "Password is incorrect" });
      const token = jwt.sign({ id: org._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res
        .send({
          success: true,
          token: token,
          userData: org,
        })
        .status(200);
    }
  } catch (error) {
    next(errorHandler(error.message, 500));
  }
};

const google = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    // console.log(user);
    if (!user) {
      const generatePassword = Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(generatePassword, salt);
      const newUser = new userModel({
        username:
          req.body.username.split(" ").join("") +
          Math.floor(Math.random() * 1000),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.KEY, {
        expiresIn: "1h",
      });
      res.send({
        success: true,
        userData: newUser,
        token: token,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "1h",
    });
    res
      .send({
        success: true,
        token: token,
      })
      .status(200)
      .json({ userData: user });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const sendOtp = async (req, res, next) => {
  try {
    const email = req.body.email;
    const individual = req.body.individual;
    if (individual) {
      const data = await userModel.findOne({ email: email });
      if (!data) return res.status(400).json({ error: "Email does not exist" });
      const otp = Math.floor(100000 + Math.random() * 900000);
      const cDate = new Date();
      await otpModel.findOneAndUpdate(
        { user_id: data._id },
        {
          otp: otp,
          isVerified: false,
          timstamp: new Date(cDate.getTime()),
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      const mailSubject = "OTP for Login";
      const mailContent = `<h1>Your OTP is ${otp}</h1>`;
      console.log(otp);
      await sendMail(email, mailSubject, mailContent);
      res
        .status(200)
        .json({ message: "OTP sent successfully", user_id: data._id });
    } else {
      const data = await ngoModel.findOne({ email: email });
      if (!data) return res.status(400).json({ error: "Email does not exist" });
      const otp = Math.floor(100000 + Math.random() * 900000);
      const cDate = new Date();
      await otpModel.findOneAndUpdate(
        {
          user_id: data._id,
        },
        {
          otp: otp,
          isVerified: false,
          timstamp: new Date(cDate.getTime()),
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      const mailSubject = "OTP for Login";
      const mailContent = `<h1>Your OTP is ${otp}</h1>`;
      // console.log(otp);
      await sendMail(email, mailSubject, mailContent);
      res
        .status(200)
        .json({ message: "OTP sent successfully", user_id: data._id });
    }
  } catch (error) {
    next(errorHandler(error.message, 500));
  }
};

const verifyOtp = async (req, res, next) => {
  const { user_id, otp, newPass } = req.body;
  const otpData = await otpModel.findOne({ user_id, otp });
  if (!otpData) {
    return res.status(200).send({ message: "You have entered wrong otp" });
  }
  const otpisExpired = await otpValidation(otpData.timestamp);
  if (otpisExpired == true) {
    return res.status(200).send({ message: "otp is expired" });
  }
  await otpModel.findByIdAndUpdate(
    { _id: otpData._id },
    {
      $set: {
        isVerified: true,
      },
    }
  );
  const userData = await userModel.findOne({ _id: otpData.user_id });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPass, salt);
  await userModel.findByIdAndUpdate(
    { _id: userData._id },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );
  res.status(200).send({ message: "Password changed successfully" });
};

const signOut = async (req, res, next) => {
  try {
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn, signOut, google, sendOtp, verifyOtp };
