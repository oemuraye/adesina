import useScrollAnimation from "../../hooks/useScrollAnimation";

import projectImg0 from "../../utils/images/displayImg0.png";
import projectImg1 from "../../utils/images/displayImg1.png";
import projectImg2 from "../../utils/images/displayImg2.png";
import projectImg3 from "../../utils/images/displayImg3.png";
import projectImg4 from "../../utils/images/displayImg4.png";
import projectImg5 from "../../utils/images/displayImg6.png";

import './investments.css';
import ProjectCards from './ProjectCards';

const projectCardDetails = [
  { title: 'A19', numOfUnits: '19 Plots', annualCashFlow: '', description: '1.5X - 3X', years: '3', amount: '3.5M', address: 'Lugbe, Abuja Nigeria.', projImg: projectImg0, projectStatus: 'open'},
  { title: 'A25', numOfUnits: '25', annualCashFlow: '10', description: '2X - 3.5X', years: '5', amount: '45M', address: 'Lugbe, Abuja Nigeria.', projImg: projectImg1, projectStatus: 'closed'},
  { title: 'A6', numOfUnits: '6', annualCashFlow: '6', description: '2.5X - 3.5X', years: '5', amount: '30M', address: 'Jahi, Abuja Nigeria.', projImg: projectImg2, projectStatus: 'closed'},
]

const Investments = () => {
  useScrollAnimation();
  return (
    <main className='page-width investment-section container-fluid my-5 pb-5'>

      <h1 className='mb-4'>Investments</h1>

      {projectCardDetails.map((details, index) => (
        <section key={index}>
          <ProjectCards details={details} />
        </section>
      ))}
    </main>
  )
}

export default Investments