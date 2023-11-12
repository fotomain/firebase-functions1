
const functions=require('firebase-functions');

const admin=require('firebase-admin');
const nodemailer =require('nodemailer');
admin.initializeApp()
 
 
exports.sendEmailNotification1=functions.firestore.document('/port_users/{docId}')
.onCreate((snap,ctx)=>{

    const data=snap.data();

    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'foto888999@gmail.com',
            pass:'rpezevwacplvxshd'
        }
    });

            authData.sendMail({
            from :'info@makethatapp.com',
            to:"foto888999@gmail.com",
            subject:'Your submission Info',
            text:"text1",
            html:"<div>html1</div>",
            }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});
