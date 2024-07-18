import { Link, useNavigate } from 'react-router-dom';

import locationPin from "../../utils/icons/location_pin.png";

const ProjectCards = ({ details }) => {
  const navigate = useNavigate();

  const goToProjectDetails = () => {
    navigate('/investment_details', { state: { details } })
  }

  return (
    <section className='mb-5'>
        <hr />

        <section className='row mt-5'>
          <div className="col-md-5 col-sm-12 my-3 js-scroll slide-left">
            <div className="d-flex align-items-center gap-4">
              <h3 className='mb-0 custom-besleyFont'>{details.title}</h3>
              {details.projectStatus === 'open' ? (
                <span role='button' onClick={goToProjectDetails} className='customBtn'>View Project</span>
              ): (
                <span className='customBtn'>Closed</span>
              )}
            </div>

            <div className="d-flex flex-column gap-1 my-4">
              <p className='mb-0'>{details.numOfUnits} Units</p>
              <p className='mb-0'>{details.description} Target Returns ({details.years}yrs)</p>
              <p className='mb-0'>Minimum Investment: ₦{details.amount}M</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <img src={locationPin} alt="icon" width='24px' height='29px' />
              <Link target='_blank' to='https://www.google.com/maps/search/?'>{details.address}</Link>
            </div>
            
          </div>
          <div className="col-md-7 col-sm-12 my-3 js-scroll slide-right">
            <div className="imgHover_effect">
              <img src={details.projImg} alt="img" className='img-fluid' />
            </div>
          </div>
        </section>
      </section>
  )
}

export default ProjectCards