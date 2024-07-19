import useScrollAnimation from "../../hooks/useScrollAnimation";
import aboutInfoImg from "../../utils/images/about info img.png";

import memberPics1 from '../../utils/images/Opeyemi Edited.png'
import memberPics2 from '../../utils/images/Blessing.png'
import memberPics3 from '../../utils/images/Aminat.png'

import './about.css';

const About = () => {
    useScrollAnimation();
    const valuesData = [
        { num: '01', title: 'Market Research', description: 'Driven by the AfriProsperity philosophy, Adesina is on a mission to contribute $1B in Infrastructure Development across Africa by 2030, by co-investing in strategic opportunities for collective wealth.' },
        { num: '02', title: 'Financial Advisory', description: 'We offer fair and balanced insights to guide investors decisions based on their financial strength, weakness, opportunity and threat in a way that aligns with their goals.' },
        { num: '03', title: 'Investment Management', description: 'We oversee the acquisition, maintenance and exit of assets in investors portfolio, following their short- or long-term investment goals.' },
        { num: '04', title: 'Investors Education', description: 'We offer initiatives that are essential to empower investors with the wealth intelligence required to make sound investment decisions.' }
    ];

    const teamMembers = [
        { name: 'Opeyemi Adesina', role: 'Founder / Chief Investment Officer', profilePic: memberPics1 },
        { name: 'Blessing Atanda', role: 'Senior Investment Associate', profilePic: memberPics2 },
        { name: 'Aminat Kazeem', role: 'Investment Associate', profilePic: memberPics3 },
    ];


  return (
    <main className='page-width about-section container-fluid my-5 pb-5'>
        
        <section className="about-hero d-flex flex-column gap-4 mb-5 pt-5">
            <div className="about-heading custom-besleyFont js-scroll slide-left my-3">
                <h4>Driven by the AfriProsperity philosophy, Adesina is on a mission to contribute $1B in Infrastructure Development across Africa by 2030, by co-investing in strategic opportunities for collective wealth.</h4>
            </div>
            <div className="js-scroll fade-in imgHover_effect img-fluid"><img src={aboutInfoImg} alt="projImg" width='100%' /></div>
        </section>

        <section className='row values-section mt-5'>
          <div className="col-md-7 col-sm-12 my-4 p-2 js-scroll slide-left">
            <div className="values-info custom-besleyFont">
                <h4>Riding on the core values of Excellence, Audacity and Honor, Adesina is dedicated to offering the following</h4>
            </div>
          </div>
          <div className="col-md-5 col-sm-12 my-4 mb-5 js-scroll slide-right">
            <div className="d-flex flex-column gap-4 p-2">

                {valuesData.map((detail, index) => (
                    <div key={index} className="d-flex gap-3">
                        <h5>{detail.num}</h5>
                        <div className="d-flex flex-column">
                            <h5>{detail.title}</h5>
                            <p>{detail.description}</p>
                        </div>
                    </div>
                ))} 
                
            </div>
          </div>
        </section>

        <section className="team-section my-5">
            <div className="values-info custom-besleyFont js-scroll fade-in">
                <h4>Meet the executive team, the leaders of the Adesina pack putting 100 percent into finding you the best investment offers.</h4>
            </div>

            <div className="row p-2 my-4">
                <div className="col-md-3 col-sm-12"></div>
                <div className="col-md-9 col-sm-12">
                    <div className="row team-members">
                        {teamMembers.map((detail, index) => (
                            <div key={index} className="col-md-6 col-sm-12 d-flex flex-column gap-2 my-4">
                                <img src={detail.profilePic} alt="" className="img-fluid" width='100%' />
                                <h5 className="custom-besleyFont mt-4 mb-0">{detail.name}</h5>
                                <p className="custom-neueFont_roman ">{detail.role}</p>
                            </div>
                        ))} 
                    </div>
                </div>


                
            </div>
        </section>
    </main>
  )
}

export default About;