import Handlebars from 'handlebars';
import { createTransport } from 'nodemailer';
import { configs } from '../settings';

const transporter = createTransport(configs.app.nodemailer);

export async function sendRegisterSuccessEmail(user: any) {
  return;
}

export async function sendPasswordResetEmail(user: any, other: any = {}) {
  const templateString = configs.app.templates['resetPassword.html'];
  const template = Handlebars.compile(templateString);
  if (!other.link)other.link=configs.app.host+`/auth/reset/finish?email=${user.email}&resetkey=${user.recoveryCode}`;
  const output = template({
    user: {
      displayName: user.displayName,
      recoveryCode: user.recoveryCode,
    }, ...other,
  });

  const mailOptions = {
    to: user.email,
    bcc: configs.app.templates.resetPassword.bcc,
    from: configs.app.templates.resetPassword.from,
    subject: configs.app.templates.resetPassword.subject,
    html: output,
  };
  // console.log(mailOptions);
  return await transporter.sendMail(mailOptions);
}
