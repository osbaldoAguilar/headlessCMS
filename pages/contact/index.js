import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendMail } from '../../lib/api';
import styles from '../../styles/Home.module.css';

const Contact = ({ menuItems }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async evt => {
    // we'll fill this in in a moment
    evt.preventDefault();
    const emailContent = `
      Message received from <strong>${name}</strong>. 
      Their email address is <strong>${email}</strong>. <br />
      They'd like to know about...
      ${message}
    `;
    const data = await sendMail(
      'New message from website contact form',
      emailContent
    );

    if (data?.sent) {
      // email was sent successfully!
      console.log('data sent: ', data);
      router.push('/contact/thanks');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact us page</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact us</h1>
        <hr />
                
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label'>Your name</label>
            <input
              className='input'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='label'>Your email</label>
            <input
              className='input'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='label'>Your message</label>
            <textarea
              className='textarea'                  
              value={message}
              onChange={e => setMessage(e.target.value)}
              ></textarea>
          </div>

          <button>Send</button>
        </form>
		  </main>
	  </div>              
  );
};

export default Contact;