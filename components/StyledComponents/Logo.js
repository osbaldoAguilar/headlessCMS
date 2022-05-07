import React from 'react';
import styles from '../../styles/Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
    <div className='flex p-5'>
      <div className={styles.innerLogo}>
        <span>A</span>
        <span>&</span>
        <span>R</span>
        <span>Repair</span>
      </div>
    </div>
    </div>
  );
};

export default Logo;
