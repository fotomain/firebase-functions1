import {
    onDocumentCreated,
    Change,
    FirestoreEvent
} from "firebase-functions/v2/firestore";

// const admin=require('firebase-admin');
// admin.initializeApp()

const emailjs = require('@emailjs/browser');
 
eexports.createuser = onDocumentCreated("port_users/{userId}", (event) =>{

    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }
    const data = snapshot.data();

    const YOUR_PUBLIC_KEY = '6lXsJynSUxcKnHKtp'
    emailjs.init(YOUR_PUBLIC_KEY)
    
                await emailjs.send( YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
                        to_name: 'logged in firebase',
                        from_name: 'logged in firebase'
                    });
                    // alert("=== email successfully sent check inbox");
    
    


});
