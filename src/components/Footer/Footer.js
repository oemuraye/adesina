import { Link } from 'react-router-dom';
import footerLogo from '../../utils/images/footer logo.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className='container-fluid text-white'>
        <section className="footer-logo mb-5 pt-4">
            <img className='img-fluid' src={footerLogo} alt="logo" width='126px' height='106px' />
        </section>

        <section className="row my-3">
            <div className="footer-contact col-md-5 col-sm-12 mb-5">
                <h2>Get in touch with us</h2>
                <form className="d-flex gap-3 mt-4">
                    <input className='form-control' type="email" name="email" placeholder='Enter your email' id="email" />
                    <button className='customBtn'>Submit</button>
                </form>
            </div>
            
            <div className="footer-links col-md-7 col-sm-12 mb-5">
                <section className='row'>
                    <div className='row col-md-8 col-sm-12'>
                        <div className='col-6'>
                            <h4>Office Address</h4>
                            <Link target='_blank' to='https://www.google.com/maps/search/?'>4th Floor, Tower C, <br /> Churchgate Plaza, <br /> Central Business <br /> District, Abuja, Nigeria</Link>
                        </div>
                        <ul className='col-6'>
                            <li><h4>Contact us</h4></li>
                            <li><Link to='tel:+2348106575600'>(+234) 810 6575 600</Link></li>
                            <li><Link to='tel:+234811 2143 923'>(+234) 811 2143 923</Link></li>
                            <li><Link to='mailto:business@adesina.ng'>business@adesina.ng</Link></li>
                        </ul>
                    </div>
                    <ul className='col-md-4 col-sm-12'>
                        <li><h4>Links</h4></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/investments'>Investment</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </section>
            </div>
        </section>

        <section className="social-links d-flex align-items-center gap-3">
            <Link to=''><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to=''><i className="fa-brands fa-instagram"></i></Link>
            <Link to=''><i className="fa-brands fa-square-youtube"></i></Link>
            <Link to=''><i className="fa-brands fa-x-twitter"></i></Link>
        </section>

        <hr />

        <section className="d-flex align-items-center justify-content-between flex-wrap gap-3 pb-5">
            <span>@ Copyright Adesina Assets</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Website by Cosmos Design Space</span>
        </section>
    </footer>
  )
}

export default Footer;