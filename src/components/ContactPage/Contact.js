
import { Link } from 'react-router-dom';
import './contact.css';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className='contact_page-section pb-5'>
        <section className="hero">
            <div className="hero-text container-fluid">
                <h1 className='mb-4 pt-4'>Get in touch</h1>
            </div>
        </section>

        <section className="page-width container-fluid my-5 text-white custom-neueFont_roman">
            <div className="general-contact mb-md-5 mb-2 pb-md-2 pb-5">
                <hr />

                <div className="row">
                    <div className="col-md-9 col-7">
                        <h4 className='custom-besleyFont'>General</h4>
                    </div>
                    <div className="col-md-3 col-5">
                        <Link to="mailto:info@adesina.ng">info@adesina.ng</Link>
                    </div>
                </div>

            </div>
            <div className="social-contact mb-md-5 mb-2 pb-md-2 pb-5">
                <hr />

                <div className="row">
                    <div className="col-md-9 col-7">
                        <h4 className='custom-besleyFont'>Social</h4>
                    </div>
                    <div className="col-md-3 col-5">
                        <div className="d-flex flex-column gap-2">
                            <Link to="http://Facebook.com/adesinaaco">Instagram</Link>
                            <Link to="http://instagram.com/adesinaco">Facebook</Link>
                            <Link to="http://twitter.com/adesinaco">X</Link>
                            <Link to="http://YouTube.com/@adesinaco">Youtube</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="office-contact mb-md-5 mb-2 pb-md-2 pb-5">
                <hr />

                <div className="row">
                    <div className="col-md-9 col-7">
                        <h4 className='custom-besleyFont'>Office</h4>
                    </div>
                    <div className="col-md-3 col-5">
                        <div className="d-flex flex-column gap-2">
                            <Link target='_blank' to='https://www.google.com/maps/search/?'>1st Floor, Murjantu House, <br /> Maitama, Abuja</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className='container my-5 py-5'>
            <ContactForm formType="contact" />
        </section>
    </section>
  )
}

export default Contact;