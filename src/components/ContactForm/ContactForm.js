import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './contactForm.css';
import API from '../../api/api';

const ContactForm = ({formType}) => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    capital: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill out all required fields.');
      return false;
    }
    if (formType === 'invest' && !formData.capital) {
      setFormError('Please specify the investment capital.');
      return false;
    }
    if (formType !== 'invest' && !formData.message) {
      setFormError('Please provide a message.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    setLoading(true);
    let data = {};

    if (formType === 'invest') {
      data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        capital: formData.capital,
      };
    } else {
      data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
    }

    const endpoint = formType === 'invest' ? '/invest' : '/contact';

    try {
      console.log(data);
      const response = await API.post(`${endpoint}`, data);

      if (!response.status === 200) {
        throw new Error('Failed to submit form');
      }
      // console.log(response);

      // const result = await response.json();
      console.log('Successful form submit form:', response.data.message);
      setSuccessMessage('Your message has been sent successfully.');
      setLoading(false);

      setFormData({
        name: '',
        email: '',
        phone: '',
        capital: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('There was an error sending your message. Please try again later.');
      setLoading(false);
    }
  };

  if (successMessage) {
    setTimeout(() => {
      setSuccessMessage('');
    }, [20000]);
  }
  if (formError) {
    setTimeout(() => {
      setFormError('');
    }, [10000]);
  }

  return (
    <section className='contact_form-section js-scroll fade-in my-5'>
      <h3 className='custom-besleyFont text-white text-center'>Contact form</h3>
      {formError && <p className="text-danger text-center">{formError}</p>}
      {successMessage && <p className="text-success text-center">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 mt-4 p-1">
          <input onChange={handleChange} value={formData.name} className='form-control' type="text" name="name" placeholder='Full Name' id="name" />
          <input onChange={handleChange} value={formData.email} className='form-control' type="email" name="email" placeholder='Email' id="email" />
          <input onChange={handleChange} value={formData.phone} className='form-control' type="phone" name="phone" placeholder='Phone number' id="phone" />

          {formType === 'invest' ? (
            <>
              <input onChange={handleChange} value={formData.capital} className='form-control' type="number" name="capital" placeholder='Investment Capital (Amount)' id="capital" />
              {/* <select className="form-control custom-select-arrow" name="payment-plan" id="payment-plan" >
                <option value="">Payment Plan (₦10M/300sqm)</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select> */}
            </>
          ):(
            <input onChange={handleChange} value={formData.message} className='form-control' type="text" name="message" placeholder='Message' id="message" />
          )}

          <button className='customBtn mt-3 py-2'>
            {loading ? (<div className="d-flex justify-content-center"><span className='spinner-border spinner-border-sm text-secondary' role="status"></span></div>) : 'Submit'}
          </button>
      </form>
    </section>
  )
}

export default ContactForm;