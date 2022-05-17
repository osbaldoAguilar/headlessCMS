import styles from '../../styles/Home.module.css'
function LinkStyle({children}) {
  return (
    <div className=''>
      <div className={styles.ridgeB}>
        {children}
      </div>
    </div>
  )
}

export default LinkStyle