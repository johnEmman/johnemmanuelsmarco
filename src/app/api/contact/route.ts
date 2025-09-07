// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // must be verified domain or default resend
      to: "ty.johnemmanuel@gmail.com",
      replyTo: email, // ✅ correct property name
      subject: "New Form Message 🚀",
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Resend response:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
