
// import { render } from '@react-email/render';
// import AWS from 'aws-sdk';
import { on } from 'events';
import { stringify } from 'querystring';
import * as React from 'react';
// import { Email } from '../../components/Email/Email';

// AWS.config.update({ region: process.env.AWS_SES_REGION });
// const emailHtml = render(<Email url="https://wealthandtastetattoo.com" />);

// const options = {
//     Source: process.env.FROM_EMAIL,
//     Destination: {
//       ToAddresses: [process.env.TO_EMAIL],
//     },
//     Message: {
//       Body: {
//         Html: {
//           Charset: 'UTF-8',
//           Data: emailHtml,
//         },
//       },
//       Subject: {
//         Charset: 'UTF-8',
//         Data: 'NEW PATIENT INQUIRY',
//       },
//     },
//   };
//   const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' })
//   .sendEmail(options)
//   .promise();
 const BookingPage: React.FunctionComponent = () => {
     const [base64, setBase64] = React.useState("");
     const [userEmail,setUserEmail] = React.useState({name:"", email:"", message: ""});
     const handleChange = (e:any) => {
        setUserEmail({ ...userEmail, [e.target.name]: e.target.value });
      };
      const handleImageChange = (e:any) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file)
      }
      const onLoad = (fileString:any) => {
          setBase64(fileString);
      }
      const getBase64 = (file:any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result)
        }
      }
      const handleSubmit = (e:any) => {
        // prevents the submit button from refreshing the page
        e.preventDefault();
        fetch(`${process.env.API_GATEWAY}`, {
            mode:"no-cors",
            method:"POST",
            headers:{
               Accept:"application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                senderName: "samkuttenkuler@gmail.com",
                senderEmail: "samkuttenkuler@gmail.com",
                sendermessage: "Hey test test test",
                base64Data: base64,
                date: new Date(),
                fileName: "Test"
            })
        });
        console.log(userEmail);
        setUserEmail({ name: "", email: "", message: "" });//reset values after submit
      };
    
return (
        <section className=" booking-sec">
            <h4 id="form-h">New Client Form</h4>
            <div className="booking-container">
            <section className="booking-left">
                <div className="text-container">
                    <p>Please include the following and we'll match you with the correct artist:</p>
                    <ol>
                        <li>Location</li>
                        <li>Size</li>
                        <li>A brief description</li>
                        <li>Style</li>
                        <li>Color? Black and Grey?</li>
                        <li>A reference photo.</li>
                    </ol>
                </div>
            </section>
            <section className="booking-right">
                    <form method="POST" className="contact-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} value={userEmail.name} 
                        placeholder="Name"/>
                        <input type="text" onChange={handleChange} value={userEmail.email} 
                        placeholder="Name"/>
                        <input type="text" onChange={handleChange} value={userEmail.message} 
                        placeholder="Name"/>
                        <input type="file" accept="application/pdf,image/png, image/jpeg" onChange={handleImageChange}/>
                        
                        <div className="form-control">
                           {base64 ? <input type="submit" value="Send" /> : null} 
                        </div>
                    </form>
            </section>
        </div>
    </section>
    
)};
export default BookingPage;
