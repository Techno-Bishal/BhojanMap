import dotenv from 'dotenv'
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') })


interface IData{
  to: string;
  subject: string;
  text: string;
  html?: string;
}

import nodemailer from "nodemailer"

const sendMail = async(data:IData)=> {
 const transport =  nodemailer.createTransport({
     service: 'gmail',
     auth:{
      user: process.env.EMAIL,
      pass : process.env.PASS
     }
  })

  const mailOptions = {
    from : "MithoGhar<bishalaiwork@gmail.com>",
    to : data.to,
    subject: data.subject,
    text: data.text
  }

  try {
    await transport.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}

export default sendMail