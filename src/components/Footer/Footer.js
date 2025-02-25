import { Link } from 'react-router-dom';
import footerLogo from '../../utils/images/footer logo.png';

import './footer.css';

const Footer = () => {
  return (
    <footer className='container-fluid text-white'>
        <section className="footer-logo pt-5">
            <img className='img-fluid' src={footerLogo} alt="logo" width='126px' height='106px' />
        </section>

        <section className="row my-3">
            <div className="footer-contact col-md-5 col-sm-12 my-4">
                <h2>Get in touch with us</h2>
                <form className="d-flex gap-3 mt-4">
                    <input className='form-control' type="email" name="email" placeholder='Enter your email' id="email" />
                    <button className='customBtn'>Submit</button>
                </form>
            </div>
            
            <div className="footer-links col-md-7 col-sm-12">
                <section className='row'>
                    <div className='row col-md-9 col-sm-12 my-4'>
                        <div className='col-6'>
                            <h4 className='custom-neueFont_Bold'>Office Address</h4>
                            <Link target='_blank' to='https://www.google.com/maps/search/?'>4th Floor, Tower C, <br /> Churchgate Plaza, <br /> Central Business <br /> District, Abuja, Nigeria</Link>
                        </div>
                        <ul className='col-6'>
                            <li><h4 className='custom-neueFont_Bold'>Contact us</h4></li>
                            <li><Link to='tel:+2347055554807'>(+234) 705 5554 807</Link></li>
                            <li><Link to='tel:+2348053323987'>(+234) 805 3323 987</Link></li>
                            <li><Link to='mailto:business@adesina.ng'>business@adesina.ng</Link></li>
                        </ul>
                    </div>
                    <ul className='col-md-3 col-sm-12 my-4'>
                        <li><h4 className='custom-neueFont_Bold'>Links</h4></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/investments'>Investment</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                    </ul>
                </section>
            </div>
        </section>

        <section className="social-links d-flex align-items-center gap-3">
            <Link to='http://Facebook.com/adesinaaco'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to='http://instagram.com/adesinaco'><i className="fa-brands fa-instagram"></i></Link>
            <Link to='http://YouTube.com/@adesinaco'><i className="fa-brands fa-square-youtube"></i></Link>
            <Link to='http://twitter.com/adesinaco'><i className="fa-brands fa-x-twitter"></i></Link>
        </section>

        <hr />

        <section className="custom-neueFont_roman copyright d-flex align-items-center justify-content-between flex-wrap gap-3 pb-5">
            <span>@ Copyright Adesina Assets</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Website by Cosmos Design Space</span>
        </section>
    </footer>
  )
}

export default Footer;