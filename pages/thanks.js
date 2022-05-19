import PageLayout from '../components/PageLayout'
import Logo from '../components/StyledComponents/Logo'
function thanks() {
  return (
    <PageLayout>
      <div className='flex h-screen justify-center flex-col text-center'>
        <p>       
        
         <Logo id="pageLogo"/>

        Thanks your email was sucessful
        </p>
        <p>We will contact within 48hrs</p>
      </div>

    </PageLayout>
  )
}

export default thanks