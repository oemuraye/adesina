import { Link, useLocation } from 'react-router-dom';

import ContactForm from '../ContactForm/ContactForm';

// import originalSurveyDoc from '../../utils/docs'
// import originalR_of_ODoc from '../../utils/docs'
// import FCTA_RegDoc from '../../utils/docs'
// import ministersAppDoc from '../../utils/docs'
// import subscriptionFormDoc from '../../utils/docs'

import locationPin from "../../utils/icons/location_pin.png";
import displayImg from "../../utils/images/displayImg.png";
import downloadIcon from "../../utils/icons/downloadIcon.png";
import useScrollAnimation from '../../hooks/useScrollAnimation';

const InvestmentDetails = () => {
    useScrollAnimation();
    const location = useLocation();
    const { details } = location.state;
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className='page-width container-fluid pb-5 my-5'>
        <section className="d-flex gap-4 align-items-center mb-1">
            <h1 className='mb-4 pt-4'>{details.title}</h1>
            <div className="d-flex align-items-center gap-3">
              <img src={locationPin} alt="icon" width='20px' height='25px' />
              <Link className='custom-neueFont_roman' target='_blank' to='https://www.google.com/maps/search/?'>{details.address}</Link>
            </div>
        </section>

        <section className="property_details-section">
            <div className='imgHover_effect'><img src={details.projImg} alt="displayImg" className='img-fluid' width="100%" /></div>
        
            <div className="row my-5">
                <div className="invest-details col-md-3 col-sm-12 js-scroll slide-left my-4">
                    <div className="d-flex flex-column">
                        <h4 className='mb-1'>MINIMUM INVESTMENT</h4>
                        <p className='mb-0'>{details.fullAmount}</p>
                    </div>
                    <div className="d-flex flex-column my-4">
                        <h4 className='mb-1'>TARGET RETURNS</h4>
                        <p className='mb-0'>{details.description} ({details.year} Years)</p>
                    </div>
                    <span role='button' onClick={(e) => handleScroll(e, 'contact-form')} className='customBtn px-4'>Invest</span>
                </div>
                <div className="invest-description col-md-9 col-sm-12 js-scroll slide-right my-4">
                    <p>
                        These plots offer true investors the opportunity to capitalize on a strategic real estate investment in Abuja. 
                        The plot is situated in an already fully residential area with tons of fast paced development all around that is 
                        attractive to both individual and corporate developers to meet Abuja's rental demand. The plots is offering for N10 
                        million/unit in capital commitment to leverage the Lugbe high-growth market that have demonstrated substantial increases 
                        in population and job creation for profit. 
                    </p>
                    <p>
                        The plots will strategically target mini estate developers in the near term. Hence, it exhibits strong potential
                        for both near-term income and long-term appreciation. Plot owners may also consider developing residential real 
                        estate by self on an opportunistic basis, particularly affordable rental units with an attractive price. The plots 
                        offering are expected to be fully subscribed by July, 2024.
                    </p>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 my-2">
                            <div className="d-flex flex-column gap-4">
                                <Link className='d-flex align-items-center gap-2' to="" download="Original Survey">
                                    <span className='customBtn-circle'><img src={downloadIcon} alt="downloadIcon" /></span>
                                    <p className='mb-0'>Original Survey</p>
                                </Link>
                                <Link className='d-flex align-items-center gap-2' to="" download="Original R of O Issued">
                                    <span className='customBtn-circle'><img src={downloadIcon} alt="downloadIcon" /></span>
                                    <p className='mb-0'>Original R of O Issued</p>
                                </Link>
                                <Link className='d-flex align-items-center gap-2' to="" download="FCTA Regularization">
                                    <span className='customBtn-circle'><img src={downloadIcon} alt="downloadIcon" /></span>
                                    <p className='mb-0'>FCTA Regularization</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 my-2">
                            <div className="d-flex flex-column gap-4">
                                <Link className='d-flex align-items-center gap-2' to="" download="Conveyance of Minister's Approval">
                                    <span className='customBtn-circle'><img src={downloadIcon} alt="downloadIcon" /></span>
                                    <p className='mb-0'>Conveyance of Minister's Approval</p>
                                </Link>
                                <Link className='d-flex align-items-center gap-2' to="" download="Plot Subscription Form">
                                    <span className='customBtn-circle'><img src={downloadIcon} alt="downloadIcon" /></span>
                                    <p className='mb-0'>Plot Subscription Form</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id='contact-form' className='my-5 py-5'><ContactForm formType="invest" /></section>       
    </section>
  )
}

export default InvestmentDetails