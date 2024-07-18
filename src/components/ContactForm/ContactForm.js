import useScrollAnimation from '../../hooks/useScrollAnimation';
import './contactForm.css';

const ContactForm = () => {
  useScrollAnimation();
  return (
    <section className='contact_form-section js-scroll fade-in'>
      <h3 className='custom-besleyFont text-white text-center'>Contact form</h3>
      
      <form className="d-flex flex-column gap-4 mt-4 p-1">
          <input className='form-control' type="Name" name="Name" placeholder='Name' id="name" />
          <input className='form-control' type="email" name="email" placeholder='Email' id="email" />
          <input className='form-control' type="phone" name="phone" placeholder='Phone number' id="phone" />
          <input className='form-control' type="message" name="message" placeholder='Message' id="message" />
          <button className='customBtn mt-3 py-2'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;