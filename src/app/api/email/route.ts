import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configure transporter (Gmail example, or use SMTP creds)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your app password
      },
    });

    // Email to Admin
    await transporter.sendMail({
      from: `"Satya Tattoo Studio" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL, // your admin email
      subject: "📩 New Tattoo Booking Request",
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: `"Satya Tattoo Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🎨 Your Tattoo Request is Confirmed – Satya Tattoo Studio",
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #111; color: #eee; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">

    <!-- Logo -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4798-622f-a7e1-17c1e1f34a7b/raw?se=2025-08-17T18%3A45%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=c773bee1-1713-5a7e-9ce4-2d2161289ffb&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-17T17%3A20%3A24Z&ske=2025-08-18T17%3A20%3A24Z&sks=b&skv=2024-08-04&sig=w9gG/MC8VVlIxXDFAnlfnFGfOfGO03ndik9X6o38qWM%3D" alt="Satya Tattoo Studio Logo" style="width: 120px; height: auto;" />
    </div>

    <!-- Heading -->
    <h2 style="color: #e11d48; text-align: center;">We’ve Received Your Tattoo Request ✅</h2>

    <!-- Body -->
    <p style="font-size: 16px; line-height: 1.6;">
      Hi <strong>${name}</strong>,
    </p>
    <p style="font-size: 16px; line-height: 1.6;">
      Thank you for reaching out to <strong>Satya Tattoo Studio</strong>.  
      Your request has been successfully received, and our team will get in touch with you shortly at 
      <span style="color:#e11d48; font-weight: bold;">${phone}</span>.
    </p>

    <p style="font-size: 15px; line-height: 1.6; text-align:center; margin: 25px 0;">
      🎉 Get ready to <strong>embrace your new identity</strong> with a tattoo that speaks your soul.
    </p>

    <!-- Call to action -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://your-website.com" 
         style="background-color:#e11d48; color:white; padding: 12px 24px; text-decoration:none; font-weight:bold; border-radius:5px;">
         Explore Our Tattoo Designs
      </a>
    </div>

    <!-- Footer -->
    <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;" />
    <p style="font-size: 13px; text-align: center; color: #aaa;">
      Satya Tattoo Studio © ${new Date().getFullYear()} <br/>
      <a href="https://your-website.com" style="color:#e11d48; text-decoration: none;">Visit Our Website</a> | 
      <a href="tel:+917033124566" style="color:#e11d48; text-decoration: none;">+91 70331 24566</a>
    </p>
  </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
