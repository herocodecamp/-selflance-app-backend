const bcrypt = require("bcrypt");
const Users = require("../models/User");
const nodemailer = require("nodemailer");
const UserOTPVerification = require("../models/UserOTPVerification");
const User = require("../models/User");

// nodemailer stuff
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "prudence.turner40@ethereal.email",
    pass: "cYgyhQppBJ2Np1ma4W",
  },
});
// testing success
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
// registration user
exports.registerUser = async (req, res) => {
  let { userName, email, password } = req.body;
  console.log(req.body);
  try {
    userName = userName.trim();
    email = email.trim();
    password = password.trim();
    console.log(email);
    console.log(req.body);
    if (userName === "" || email === "" || password === "") {
      res.json({
        status: "FAILED",
        massage: "Empty input fields",
      });
    } else if (!/^[a-zA-Z]*$/.test(userName)) {
      res.json({
        status: "FAILED",
        massage: "Invalid user name entered",
      });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      res.json({
        status: "FAILED",
        massage: "Invalid email entered",
      });
    } else if (password.length < 8) {
      res.json({
        status: "FAILED",
        massage: "Password must be at least 8 characters ",
      });
    } else {
      // checking if user already exits
      Users.find({ email }).then((result) => {
        if (result.length) {
          res.json({
            status: "FAILED",
            massage: "User with the provided email  already exists",
          });
        } else {
          const saltRounds = 10;
          bcrypt.hash(password, saltRounds).then((hashedPassword) => {
            const newUser = new Users({
              userName,
              email,
              password: hashedPassword,
              isSeller: false,
              isVerified: false,
            });
            newUser
              .save()
              .then((result) => {
                // handle account verification
                sendOTPVerificationEmail(result, res);
              })
              .catch((err) => {
                res.json({
                  status: "FAILED",
                  massage: "An error occurred while saving user account!",
                });
              })
              .catch((err) => {
                res.json({
                  status: "FAILED",
                  massage: "An error occurred while hashing password!",
                });
              });
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ massage: error.message, type: error.name });
  }
};

// send otp verification email
const sendOTPVerificationEmail = async (
  { _id, email, isVerified, isSeller },
  res
) => {
  try {
    const otp = `${Math.floor(100000 + Math.random() * 9000)}`;
    const mailOptions = {
      from: "lulu1@ethereal.email",
      to: email,
      subject: "Verify Your Email",
      html: `
            <h1>SelfLance</h1>
            <p>Hello ${email},</p>
            <p>Enter <b>${otp} </b> in the app to verify your email  address and complete verification your email:</p>
            <p>This code <b> expires in 1 hour </b>. </p>
            <p>If you did not request this, please ignore this email.</p>
            <p>Thanks,<br>`,
    };
    // hash the otp
    const saltRounds = 10;
    const hashedOTP = await bcrypt.hash(otp, saltRounds);
    const newOTPVerification = new UserOTPVerification({
      userId: _id,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    await newOTPVerification.save();
    const sendmail = await transporter.sendMail(mailOptions);
    console.log(sendmail);
    res.json({
      status: "PENDING",
      massage: "OTP sent to your email",
      data: {
        userId: _id,
        email,
        isSeller,
        isVerified,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error.massage,
      status: "FAILED",
      massage: "An error occurred while sending email",
    });
  }
};

// verify otp email
exports.verifyOTP = async (req, res) => {
  let { userId, otpNumber } = req.body;

  const otp = otpNumber;
  try {
    if (!userId || !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const UserOTPVerificationRecords = await UserOTPVerification.findOne({
        userId: userId,
      });
      console.log(UserOTPVerificationRecords);
      if (!UserOTPVerificationRecords) {
        throw Error(
          "Account record doesn't exist or has been verified already. Please sign up or log in."
        );
      } else {
        // user otp record exists
        const { expiresAt } = UserOTPVerificationRecords;
        const hashedOTP = UserOTPVerificationRecords.otp;
        if (expiresAt < Date.now()) {
          // user otp record has expired
          await UserOTPVerification.deleteMany({ userId });
          throw Error("Code has expired. Please request again");
        } else {
          const validOTP = bcrypt.compare(otp, hashedOTP);
          if (!validOTP) {
            // supplied otp is wrong
            throw new Error("Invalid code passed. Check your inbox");
          } else {
            // success
            await User.updateOne({ _id: userId }, { isVerified: true });

            await UserOTPVerification.deleteMany({ userId });
            const userDetails = await User.findOne({ _id: userId });
            res.json({
              status: "VERIFIED",
              massage: "Your email has been verified",
              data: {
                userDetails,
                userId,
                email: UserOTPVerificationRecords.email,
              },
            });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ massage: error.massage, type: error.name });
  }
};

exports.readAllUsers = async (req, res) => {
  try {
    Users.find({}).then((result) => {
      // if(err){res.status(500).json({ massage: err.massage, type: err.name })}
      res.statusCode = 200;
      res.json(result);
    });
  } catch (err) {
    res.status(500).json({ massage: err.massage, type: err.name });
  }
};

//Login user

exports.loginUser = async (req, res) => {
  const { email, password } = req.query;
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      const hashedPassword = isExist.password;
      const validPassword = bcrypt.compare(password, hashedPassword);
      if (validPassword) {
        res.json({
          status: "SUCCESS",
          massage: "Login success",
          data: {
            userId: isExist._id,
            email: isExist.email,
            isSeller: isExist.isSeller,
            isVerified: isExist.isVerified,
          },
        });
      } else {
        res.json({
          status: "FAILED",
          massage: "Wrong password ",
        });
      }
    } else {
      res.json({
        status: "NOT FOUND",
        massage: "Account record doesn't exist. Please sign up ",
      });
    }
    console.log(isExist, password);
  } catch (error) {
    res.status(500).json({ massage: err.massage, type: err.name });
  }
};
