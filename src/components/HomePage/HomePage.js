import { Link } from 'react-router-dom';

import heroVideo from '../../utils/video/IMG_3003.mov';
import heroImg from '../../utils/images/hero.png';

import './homePage.css';
import CountUpAnimation from './CountUpAnimation';
import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import TestimonySection from './TestimonySection/TestimonySection';

const HomePage = () => {
    const [triggerCountUp, setTriggerCountUp] = useState(false);

    useScrollAnimation('js-scroll', 'scrolled', (element) => {
        if (element.classList.contains('count-up-trigger')) {
            setTriggerCountUp(true);
        }
    });

  return (
    <main className='home_page-section'>
        <section className="hero">
            <video autoPlay muted loop className="hero-video">
                <source src={heroVideo} type="video/mp4" />
                <img src={heroImg} alt="Background-image" className="hero-bg-image" />
                Your browser does not support the video tag.
            </video>
            <div className='hero-text'>
                <div className="d-flex flex-column gap-3">
                    <h1 className="js-scroll fade-in">Real Estate For</h1>
                    <h1 className="js-scroll fade-in">True Investors</h1>
                </div>
            </div>
        </section>

        <section className="container brand_info-section row my-5">
            <div className="col-md-6 col-sm-12 my-4 js-scroll slide-left count-up-trigger">
                <article className='d-flex flex-column gap-2'>
                    <h4>Adesina Asset stands as the premier choice for discerning investors, offering secure and high-return real estate opportunities that transcend the typical market offerings.</h4>
                    <div className="d-flex flex-column">
                        <CountUpAnimation end={100} duration={2000} trigger={triggerCountUp} />
                        <span>Investors</span>
                    </div>
                </article>
            </div>
            <div className="col-md-6 col-sm-12 my-4 js-scroll slide-right">
                <article>
                    <h3>We are setting the standard for excellence and trust in real estate investments globally.</h3>                                    
                </article>
            </div>
        </section>

        <section className="testimony-section py-5">
            <TestimonySection />
        </section>
    </main>
  )
}

export default HomePage