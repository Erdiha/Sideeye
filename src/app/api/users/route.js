import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prisma } from "../../../utils/dbPrisma";

export async function GET(request) {
  return NextResponse.json({ message: "hello from GET" });
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, username, password } = data;
    console.log("data in psot", data);
    const checkExistingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (checkExistingUser) {
      return NextResponse.json(
        { user: null, message: "This Email already exists" },
        { status: 409 }
      );
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          username: username,
          email: email,
          hashedPassword: hashedPassword,
        },
      });
      return NextResponse.json(
        { user: newUser, message: "User created successfully" },
        { status: 201 }
      );
    }
  } catch (e) {
    console.log("data in psot", data);
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
