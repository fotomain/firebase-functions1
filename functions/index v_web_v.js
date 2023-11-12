
const admin = require ('firebase-admin');
const {onValueCreated} = require("firebase-functions/v2/database");
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user:'foto888999@gmail.com',
        pass:'rpezevwacplvxshd'
    },
});

const catchSubmission = onValueCreated("potp_users/{uid}", async (event) => {
    
    // const {from, message, replyTo} = event.data.val();

    const email = transporter.sendMail({
        from: 'foto888999@gmail.com',
        subject: `A new message from FI`,
        replyTo: `foto888999@gmail.com`,
        to: "foto888999@gmail.com",
        text: 'message111',
    });
    return event.data.ref.update({emailId: email.messageId})
});

exports.emailer = catchSubmission;
