import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/dbconfig";
import User from "@/app/models/userModel";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/app/helpers/mailer";

export async function POST(req) {
  try {
    await connectDB();
    const reqBody = await req.json();

    const { username, email, password } = reqBody;

    // validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User Already Exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      { message: "User Registered successfully", success: true, savedUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error occurred while creating account: " + error.message },
      { status: 500 }
    );
  }
}
