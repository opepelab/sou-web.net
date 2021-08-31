import { createTransport } from 'nodemailer';

export default async (req, res) => {
  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: "ocelot2828",
      pass: "mitjqissknjzaaon",
    },
  });
  await transporter.sendMail({
    from: "try-nodemailer@gmail.com",
    to: "ocelot2828gmail.com",
    subject: "try nodemailer",
    text: "sending mail by nodemailer",
  });

  res.status(200).json({
    success: true,
  });
};