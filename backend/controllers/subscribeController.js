import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Handmade Heritage" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to Handmade Heritage!",
      html: `
        <h2>Welcome!</h2>
        <p>Thank you for subscribing to Handmade Heritage. We’re thrilled to have you in our community!</p>
        <p>You'll receive exclusive artisan stories, early product drops, and more.</p>
      `,
    });

    res.status(200).json({ message: "Welcome email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
};
