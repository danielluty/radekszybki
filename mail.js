
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY ||  '6614b23f89175731abf69c80af2078cf-f877bd7a-eded7fa7', 
        domain: process.env.DOMAIN || 'sandbox7f1733b1db5f4454bbf717204d7ec072.mailgun.org' 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'lutydaniel@gmail.com', // TODO: the receiver email
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
