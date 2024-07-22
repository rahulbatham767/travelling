// app/api/users/login/route.js
import connectDB from "@/dbConfig/dbconfig.js";
import User from "@/app/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || "rahul";
console.log(SECRET_KEY);

export async function POST(req, res) {
  await connectDB(); // Ensure database connection

  const { email, password } = await req.json();
  console.log(email, password);
  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400 }
    );
  }

  try {
    // Fetch the user from the database
    const user = await User.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    const headers = {
      "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`,
      "Content-Type": "application/json",
    };

    return new Response(
      JSON.stringify({ token, message: "Login successful" }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
