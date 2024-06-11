import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import './ContactMe.css'
import Assests from '../../assets/assets'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>
      <div className='contact-content'>
        <div className='flex-1'>
          <ContactInfoCard iconUrl={Assests.email} text='li8993han@gmail.com' />
          <ContactInfoCard iconUrl={Assests.github} text='https://github.com/Tomoe-12' />
        </div>
        <div className='flex-1'>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe