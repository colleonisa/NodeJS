var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'isabeliccolleoni@gmail.com',
    pass: 'jwfo cjaq wbtg mpia'
  }
});

var mailOptions = {
  from: 'isabeliccolleoni@gmail.com',
  to: 'dianadenezrosso02@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'oiee :3'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 