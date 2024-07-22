import nodemailer from "nodemailer";
import User from "../models/userModel";
import bcrypt from "bcrypt";

export const sendMail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgetPasswordToken: hashedToken,
        forgetPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7c63b1c15fc92b",
        pass: "********ed3e",
      },
    });
    const mailOptions = await transporter.sendMail({
      from: "shinchankazama53@gmail.com", // sender address
      to: email, // list of receivers
      subject:
        emailType === "verify" ? "Verify Your Email" : "Reset your Password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      } or copy and paste the link in your browser. <br>
      
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    });

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
