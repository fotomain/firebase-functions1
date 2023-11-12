import {
    onDocumentCreated,
    Change,
    FirestoreEvent
} from "firebase-functions/v2/firestore";

// const admin=require('firebase-admin');
// admin.initializeApp()

const nodemailer =require('nodemailer');
 
eexports.createuser = onDocumentCreated("port_users/{userId}", (event) =>{

    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }
    const data = snapshot.data();

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
            to:`foto888999@gmail.com`,
            subject:'Your submission Info',
            text:`text1`,
            html:`html1`+JSON.stringify(data),
            }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));

});
