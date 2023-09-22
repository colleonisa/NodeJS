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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Isabeli Colleoni 2B jwfo cjaq wbtg mpia'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 