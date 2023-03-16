// example
const bcrypt = require("bcrypt");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const UserOTPVerification = require("../models/UserOTPVerification");

// nodemailer stuff 
let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'afton19@ethereal.email',
        pass: 'ux3cmn6ZpGWkuAKXkp'
    }
})
// testing success
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

exports.registerUser = (req, res) => {
  let { userName, email, password } = req.query;
  console.log(req.query)
  userName = userName.trim();
  email = email.trim();
  password = password.trim();
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
    User.find({ email }).then((result) => {
      if (result.length) {
        res.json({
          status: "FAILED",
          massage: "User with the provided email  already exists",
        });
      } else {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds).then((hashedPassword) => {
          const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            isSeller: true,
            isVerified: false,
          });
          newUser.save()
          .then((result) => {
            // handle account verification
            sendOTPVerificationEmail(result,res)
            
          }).catch((err) =>{
            res.json({
                status:"FAILED",
                massage:"An error occurred while saving user account!"})
          })
          .catch((err)=>{
            res.json({
                status:"FAILED",
                massage:"An error occurred while hashing password!"
            })
          })
        });
      }
    });
  }
 
};

// send otp verification email
const sendOTPVerificationEmail = async ({_id,email}, res)=>{

    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        const mailOptions = {
            from: 'afton19@ethereal.email',
            to:email,
            subject: 'Verify Your Email',
            html: `
            <h1>SelfLance</h1>
            <p>Hello ${email},</p>
            <p>Enter <b>${otp} </b> in the app to verify your email  address and complete verification your email:</p>
            <p>This code <b> expires in 1 hour </b>. </p>
            <p>If you did not request this, please ignore this email.</p>
            <p>Thanks,<br>`
        }
        // hash the otp 
        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRounds);
   const newOTPVerification =     new UserOTPVerification({
            userId:_id,
            otp:hashedOTP,
            createdAt:Date.now() + 3600000,
            expiresAt:Date.now

        })
      await  newOTPVerification.save();
        await  transporter.sendMail(mailOptions);
        res.json({
            status:"PENDING",
            massage:"OTP sent to your email",
            data:{
                userId:_id,
                email,
            }
        })
    } catch (error) {
        res.json({
            status:"FAILED",
            massage:"An error occurred while sending email",
            
        })
    }

}