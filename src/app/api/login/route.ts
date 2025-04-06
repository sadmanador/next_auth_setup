// src/app/api/auth/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../../models/User"; // Adjust the path if needed
import connectionToDB from "../../../../config/connection";

export async function POST(request) {
  try {
    await connectionToDB();

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 400 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "User authenticated successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error?.message || "",
      },
      { status: 500 }
    );
  }
}
