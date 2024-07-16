import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import './homePage.css';
import CountUpAnimation from './CountUpAnimation';

const HomePage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });

  return (
    <main className='home_page-section'>
        <section className="hero">
            <div className='hero-text'>
                <div className="d-flex flex-column gap-3">
                    <h1 className="js-scroll fade-in">Real Estate For</h1>
                    <h1 className="js-scroll fade-in">True Investors</h1>
                </div>
            </div>
        </section>

        <section className="container brand_info-section row my-5">
            <div className="col-md-6 col-sm-12 my-4 js-scroll slide-left">
                <article className='d-flex flex-column gap-3'>
                    <h4>Adesina Asset stands as the premier choice for discerning investors, offering secure and high-return real estate opportunities that transcend the typical market offerings.</h4>
                    <div className="d-flex flex-column">
                        <h1 className='mb-0'>
                            <CountUpAnimation />
                        </h1>
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
    </main>
  )
}

export default HomePage