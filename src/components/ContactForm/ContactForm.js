import useScrollAnimation from '../../hooks/useScrollAnimation';
import './contactForm.css';

const ContactForm = ({formType}) => {
  useScrollAnimation();

  return (
    <section className='contact_form-section js-scroll fade-in my-5'>
      <h3 className='custom-besleyFont text-white text-center'>Contact form</h3>
      
      <form className="d-flex flex-column gap-4 mt-4 p-1">
          <input className='form-control' type="text" name="name" placeholder='Full Name' id="name" />
          <input className='form-control' type="email" name="email" placeholder='Email' id="email" />
          <input className='form-control' type="phone" name="phone" placeholder='Phone number' id="phone" />

          {formType === 'invest' ? (
            <>
              <input className='form-control' type="number" name="capital" placeholder='Investment Capital (Amount)' id="capital" />
              {/* <select className="form-control custom-select-arrow" name="payment-plan" id="payment-plan" >
                <option value="">Payment Plan (₦10M/300sqm)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select> */}
            </>
          ):(
            <input className='form-control' type="text" name="message" placeholder='Message' id="message" />
          )}

          <button className='customBtn mt-3 py-2'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;