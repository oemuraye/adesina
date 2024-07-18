import useScrollAnimation from "../../hooks/useScrollAnimation";
import projectImg1 from "../../utils/images/displayImg.png";

import './investments.css';
import ProjectCards from './ProjectCards';

const Investments = () => {
  useScrollAnimation();
  const projectCardDetails = [
    { title: 'A20', numOfUnits: '20', description: '1.5X - 3X', years: '3', amount: '10', address: 'Lugbe, Abuja Nigeria.', projImg: projectImg1, projectStatus: 'open'},
    { title: 'A20', numOfUnits: '20', description: '1.5X - 3X', years: '3', amount: '10', address: 'Lugbe, Abuja Nigeria.', projImg: projectImg1, projectStatus: 'closed'}
  ]
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