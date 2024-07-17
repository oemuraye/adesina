import { useState } from 'react';

import arrowRight from '../../../utils/icons/arrow right.png';
import arrowLeft from '../../../utils/icons/arrow left.png';

const testimonies = [
    { text: "Als u een huis wil bouwen, kan u naar iedere architect stappen. Wanneer u een ‘thuis’ wil laten ontwerpen, bevelen we BEO Architecten van harte aan. De afgelopen twee jaar zijn we met het team van BEO Architecten in het intensieve avontuur van onze nieuwbouw gestapt. Tom en zijn team gaan tot het uiterste in de begeleiding van hun.", author: "Daniel James" },
    { text: "Als u een huis wil bouwen, kan u naar iedere architect stappen. Wanneer u een ‘thuis’ wil laten ontwerpen, bevelen we BEO Architecten van harte aan. De afgelopen twee jaar zijn we met het team van BEO Architecten in het intensieve avontuur van onze nieuwbouw gestapt. Tom en zijn team gaan tot het uiterste in de begeleiding van hun.", author: "Daniel James" },
    { text: "Als u een huis wil bouwen, kan u naar iedere architect stappen. Wanneer u een ‘thuis’ wil laten ontwerpen, bevelen we BEO Architecten van harte aan. De afgelopen twee jaar zijn we met het team van BEO Architecten in het intensieve avontuur van onze nieuwbouw gestapt. Tom en zijn team gaan tot het uiterste in de begeleiding van hun.", author: "Daniel James" },
];

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <section id="carouselExampleControlsNoTouching" className="container js-scroll fade-in px-md-5 px-sm-1 carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div className="d-flex gap-3 mb-4">
        <img role='button' src={arrowLeft} alt="indicators" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" />
        <img role='button' src={arrowRight} alt="indicators" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" />
      </div>
      <div className="carousel-inner">
        {testimonies.map((testimony, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <i className="fa-solid fa-quote-left mb-4"></i>
              <div className='ps-3'>
                <p className=''>{testimony.text}</p>
                <h4 className='custom-besleyFont'>{testimony.author}</h4>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default TestimonySection