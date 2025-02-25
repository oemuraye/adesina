import useScrollAnimation from "../../hooks/useScrollAnimation";

import projectImg0 from "../../utils/images/coming soon.jpg";
import projectImg1 from "../../utils/images/displayImg1.png";
import projectImg2 from "../../utils/images/displayImg2.png";
import projectImg3 from "../../utils/images/displayImg3.png";
import projectImg4 from "../../utils/images/displayImg4.png";
import projectImg5 from "../../utils/images/displayImg5.png";
import projectImg6 from "../../utils/images/displayImg6.png";

import './investments.css';
import ProjectCards from './ProjectCards';

const projectCardDetails = [
  { title: 'A60', numOfUnits: '60+ Units', annualCashFlow: '', annualYield: '30', description: '2X - 3.5X', years: '5', amount: '$5,000', fullAmount: '$5,000', address: 'Lugbe.', projImg: projectImg0, projectStatus: 'Coming Soon'},
  { title: 'A25', numOfUnits: '25 Units', annualCashFlow: '10', annualYield: '', description: '2X - 3.5X', years: '5', amount: '₦45M', fullAmount: '₦45,000,000', address: 'Lugbe, Abuja.', projImg: projectImg1, projectStatus: 'Closed'},
  { title: 'A6', numOfUnits: '6 Units', annualCashFlow: '6', annualYield: '', description: '2.5X - 3.5X', years: '5', amount: '₦30M', fullAmount: '₦30,000,000', address: 'Jahi, Abuja.', projImg: projectImg2, projectStatus: 'Closed'},
  { title: 'A5', numOfUnits: '5 Units', annualCashFlow: '5-25', annualYield: '', description: '2.5X - 3.5X', years: '5', amount: '₦90M', fullAmount: '₦90,000,000', address: 'Ikota, Lekki Lagos.', projImg: projectImg3, projectStatus: 'Closed'},
  { title: 'A6', numOfUnits: '6 Hectare', annualCashFlow: '', annualYield: '', description: '3.5X - 10X', years: '10', amount: '₦10M', fullAmount: '₦10,000,000', address: 'Kwali, Abuja.', projImg: projectImg4, projectStatus: 'Closed'},
  { title: 'A7', numOfUnits: '7 Units', annualCashFlow: '5', annualYield: '', description: '2X - 10X', years: '5', amount: '₦80M', fullAmount: '₦80,000,000', address: 'Ajah, Lagos.', projImg: projectImg5, projectStatus: 'Closed'},
  { title: 'A50', numOfUnits: '50 Units', annualCashFlow: '10', annualYield: '', description: '2X - 3.5X', years: '5', amount: '₦60M', fullAmount: '₦60,000,000', address: 'Kubwa, Abuja.', projImg: projectImg6, projectStatus: 'Closed'},
  // { title: '', numOfUnits: '', annualCashFlow: '', annualYield: '', description: '', years: '', amount: '', fullAmount: '₦', address: '', projImg: projectImg6, projectStatus: ''},
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