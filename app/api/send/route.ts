import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "quotes@afrometal.com",
      to: ["3941783104@qq.com"],
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p >

        <p><strong>Email:</strong> ${email}</p >

        <p><strong>Phone:</strong> ${phone}</p >

        <p><strong>Message:</strong></p >

        <p>${message.replace(/\n/g, "<br>")}</p >
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}