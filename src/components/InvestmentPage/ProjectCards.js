import { Link } from 'react-router-dom';

import locationPin from "../../utils/icons/location_pin.png";

const ProjectCards = ({ title, numOfUnits, description, amount, address, projImg }) => {
  return (
    <section className='mb-5'>
        <hr />

        <section className='row mt-5'>
          <div className="col-md-5 col-sm-12 my-3">
            <div className="d-flex align-items-center gap-4">
              <h3 className='mb-0 custom-besleyFont'>{title}</h3>
              <Link className='customBtn'>View Project</Link>
            </div>

            <div className="d-flex flex-column gap-1 my-4">
              <p className='mb-0'>{numOfUnits} Units</p>
              <p className='mb-0'>{description}</p>
              <p className='mb-0'>Minimum Investment: N{amount}M</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <img src={locationPin} alt="icon" width='24px' height='29px' />
              <Link target='_blank' to='https://www.google.com/maps/search/?'>{address}</Link>
            </div>
            
          </div>
          <div className="col-md-7 col-sm-12 my-3">
            <div className="imgHover_effect">
              <img src={projImg} alt="img" className='img-fluid' />
            </div>
          </div>
        </section>
      </section>
  )
}

export default ProjectCards