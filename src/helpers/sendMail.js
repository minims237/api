const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sharememobile@gmail.com',
      pass: 'efzbajfypnddmqeb'
    }
  });
  const mailOptions = (to,email, attachments=[])=> {
    if(attachments.length!=0)
    return {
    from: 'sharememobile@gmail.com',
    to,
    subject: 'ALERT URGENCE',
    text: email,
    attachments,
  }
  return {
    from: 'sharememobile@gmail.com',
    to,
    subject: 'ALERTE URGENCE',
    text: email
  }
  }
const sendMail = async (to,email, {path, filename}={})=>{
    let options 
    if(path)
    options = mailOptions(to, email, [{
      filename,
      path,
      contentType: 'application/pdf'
    }])
    else
    options = mailOptions(to, email)
    try{
    const response = await transporter.sendMail(options)
    return true
    }
    catch(e){
      console.log(e)
      return false
    }
}
const sendMailAttachements= async (to,email,attachments)=>{
  let options = mailOptions(to, email,attachments)
  try{
  const response = await transporter.sendMail(options)
  return true
  }
  catch(e){
    console.log(e)
    return false
  }
}
module.exports = {
    sendMail,
    sendMailAttachements
}