import Router from "next/router";
import { useRef, useEffect } from "react";
import PageLayout from '../../components/PageLayout'
import styles from '../../styles/Form.module.css'
import { Block, BlockCentered, ButtonWrapper, ExtendedCard } from "../../components/StyledComponents/WrappingComponents";
// const stripHtml = (string) => string.replace(/(<([^>]+)>)/gi, "");

const initialState = {
    isSuccess: false,
    message: "",
    validationError: {}
};

const normalizeResponse = (url, response) => {
    if (
        url.match(/wp-json\/contact-form-7\/v1\/contact-forms\/\d+\/feedback/)
    ) {
        return normalizeContactForm7Response(response);
    }

    if (url.match(/wp-json\/gf\/v2\/forms\/\d+\/submissions/)) {
        return normalizeGravityFormsResponse(response);
    }

    return {
        ...initialState,
        ...{
            message: "Are you submitting to the right URL?"
        }
    };
};

// const normalizeGravityFormsResponse = (response) => {
//     const isSuccess = response.is_valid;
//     const message = isSuccess
//         ? stripHtml(response.confirmation_message)
//         : "There was a problem with your submission.";
//     const validationError = isSuccess
//         ? {}
//         : Object.fromEntries(
//               Object.entries(
//                   response.validation_messages
//               ).map(([key, value]) => [`input_${key}`, value])
//           );

//     return {
//         isSuccess,
//         message,
//         validationError
//     };
// };

const normalizeContactForm7Response = (response) => {
    const isSuccess = response.status === "mail_sent";
    const message = response.message;
    const validationError = isSuccess
        ? {}
        : Object.fromEntries(
              response.invalid_fields.map((error) => {
                  const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

                  return [key, error.message];
              })
          );

    return {
        isSuccess,
        message,
        validationError
    };
};

const wpForm = () => {
  return {
      ...initialState,
      submit() {
          const formElement = this.$refs.form,
              { action, method } = formElement,
              body = new FormData(formElement);

          fetch(action, {
              method,
              body
          })
              .then((response) => response.json())
              .then((response) => normalizeResponse(action, response))
              .then((response) => {
                  this.updateState(response);

                  if (this.isSuccess) {
                      formElement.reset();
                  }
              })
              .catch((error) => {
                  this.updateState({
                      ...initialState,
                      ...{
                          message: "Check the console for the error details."
                      }
                  });
                  console.log(error);
              });
      },
      updateState(newState) {
          Object.keys(newState).forEach((key) => (this[key] = newState[key]));
      }
  };
};

function contact() {
  const formElement = useRef()
   
  const normalizeContactForm7Response = (response) => {
    // The other possible statuses are different kind of errors
    const isSuccess = response.status === 'mail_sent';
    // A message is provided for all statuses
    const message = response.message;
    const validationError = isSuccess
    ? {}
    : // We transform an array of objects into an object
    Object.fromEntries(
      response.invalid_fields.map((error) => {
        // Extracts the part after "cf7-form-control-wrap"
        const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];
        
        return [key, error.message];
      })
      );
      
      return {
        isSuccess,
        message,
        validationError,
      };
    };
    const formSubmissionHandler = (event) => {
      event.preventDefault();
      
      const formElement = event.target,
      { action, method } = formElement,
      body = new FormData(formElement);
      console.log('formElement: ',formElement);
      fetch(action, {
        method,
        body
      })
      .then((response) => response.json())
      .then((response) => {
        // Determine if the submission is not valid
        console.log('Happy path: ', normalizeContactForm7Response(response));
        // Handle the happy path
      })
      .catch((error) => {
        // Handle the case when there's a problem with the request
        console.error('Error with Request: ' , error);
      });
    };
    
    useEffect(() => {
      window.wpForm = wpForm;
      formElement.current = document.querySelector("form");
      
      formElement.current.addEventListener("submit", formSubmissionHandler)
  
    return () => {
    
    }
  }, [])
      {/* <label htmlFor='your-email'>{`Somebody's Email`}</label>
      <input id="your-email" type="text" name="somebodys-email"></input> */}
  return (
      <PageLayout>
        <div className="h-screen flex flex-col">
        <BlockCentered>
            
            <div className={styles.form} x-data="wpForm()">
        <form action="http://ar-auto-repair-services.local/wp-json/contact-form-7/v1/contact-forms/208/feedback" method="post" autoComplete="off" x-ref="form" submit="submit">
        <p className="flex justify-center">
                Have a Question, need a answer... Fill out the form below
            </p>
            <div className="grid grid-cols-2 p-10">

            <label htmlFor='your-name'>Please enter your name</label>
            <input className='inputField' id="your-name" type="text" name="somebodys-name"></input> 
    
            <label className={`form-label`} htmlFor="your-subject">What is the subject for contact us</label>
            {/* <div> */}
                <input className="inputField form-input" id="your-subject" type="text" name="your-subject"/>
                {/* <div className="form-input-hint" x-show="validationError['your-subject']" x-text="validationError['your-subject']"></div> */}
            {/* </div> */}
            <label className="form-label" htmlFor="your-email">Any valid email address</label>
            {/* <div> */}
                <input className="inputField form-input" id="your-email" type="email" name="your-email"/>
                {/* <div className="form-input-hint" x-show="validationError['your-email']" x-text="validationError['your-email']"></div> */}
            {/* </div> */}
            <label className="form-label" htmlFor="your-message">Any Other Information you want to share with us?</label>
            <input className="inputField form-input" id="your-message" type="text" name="your-message"/>
            <div className="form-input-hint" x-show="validationError['your-message']" x-text="validationError['your-message']"></div>
    

            <button id="submit" type="submit">Submit</button>
        
            </div>
        </form>
        </div>
        </BlockCentered>
        
        {/* </ExtendedCard> */}
        {/* </BlockCentered> */}
        </div>
      </PageLayout>
  )
}

export default contact



// import Head from 'next/head';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { sendMail } from '../../lib/api';
// import styles from '../../styles/Home.module.css';

// const Contact = ({ menuItems }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const router = useRouter();

//   const handleSubmit = async evt => {
//     // we'll fill this in in a moment
//     evt.preventDefault();
//     const emailContent = `
//       Message received from <strong>${name}</strong>. 
//       Their email address is <strong>${email}</strong>. <br />
//       They'd like to know about...
//       ${message}
//     `;
//     const data = await sendMail(
//       'New message from website contact form',
//       emailContent
//     );

//     if (data?.sent) {
//       // email was sent successfully!
//       console.log('data sent: ', data);
//       router.push('/contact/thanks');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Contact us page</title>
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>Contact us</h1>
//         <hr />
                
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className='label'>Your name</label>
//             <input
//               className='input'
//               type='text'
//               value={name}
//               onChange={e => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className='label'>Your email</label>
//             <input
//               className='input'
//               type='email'
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className='label'>Your message</label>
//             <textarea
//               className='textarea'                  
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               ></textarea>
//           </div>

//           <button>Send</button>
//         </form>
// 		  </main>
// 	  </div>              
//   );
// };

// export default Contact;