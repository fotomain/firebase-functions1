
const functions=require('firebase-functions');

const admin=require('firebase-admin');
const nodemailer=require('nodemailer');
admin.initializeApp()
 
 
sendEmailNotification1=functions.firestore.document('/port_users/{docId}').onCreate((snap,ctx)=>{

   console.log('111');

   let authData=nodemailer.createTransport({
    secure:true,
    service: "gmail",
    auth:{
        user:'foto888999@gmail.com',
        pass:'byly zhzl puhi henn',
    }
    });
 
        const ret = authData.sendMail({
        from :'foto888999@gmail.com',
        to:"foto888999@gmail.com",
        subject:'Your submission Info'+Date.now().toString(),
        text:"text1",
        html:"<div>html1</div>",
        }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

        return {ststus:'OK'}

});

exports.emailer1 = sendEmailNotification1;