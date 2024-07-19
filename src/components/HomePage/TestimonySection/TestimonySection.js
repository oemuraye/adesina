import { useState } from 'react';

import arrowRight from '../../../utils/icons/arrow right.png';
import arrowLeft from '../../../utils/icons/arrow left.png';
import quotation from '../../../utils/icons/quotation.png';

const testimonies = [
    { author: "Emmanuel", location: 'Lagos, Nigeria', text: "I won't have made some bad investments if I had known what I know now with Adesina. Your investments are also very clear and easy, especially with the installment plan. Others will increase by maybe 20% if you're paying installments. I believe if we continue like this, In 10years, I'll be a big man effortlessly." },
    { author: "Psalm", location: 'Abuja, Nigeria', text: "After receiving our monthly Cashflow for June, I told my wife we need to invest more with Adesina. I'm just patient with my business so I can pay more attention to investing for passive income." },
    { author: "Favour", location: 'Ontario, Canada', text: "The way you Adesina presents investments is so honest and revealing. There's no pressure or time bound steal offers. They don't sell to you, they counsel and guide you to make the best decision for yourself and even if you come back to review your choices, they have a friendly way of reviewing your investment to meet your needs. It's like they work for you." },
    { author: "John", location: 'Poland', text: "Anything Adesina says I should buy, I buy without thinking twice. Though a young team, but their experience and depth of knowledge is so rich. I trust them wholeheartedly and I tell the founder this all the time." },
    { author: "Oke", location: 'Dubai, UAE', text: "I've been following Adesina on Facebook for months before I decided to make investment enquiries. From the insights from the Chief Investment Officer, I knew they were not just trying to make commission but to actually help people invest. When they say real estate for true investors, believe me, it is." },
    // { author: "", location: '', text: "" },
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
    <section id="carouselExampleControlsNoTouching" className="container js-scroll fade-in px-md-5 px-sm-1 carousel slide my-5" data-bs-touch="false" data-bs-interval="false">
      <div className="d-flex gap-3 mb-4">
        <img role='button' src={arrowLeft} alt="indicators" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" />
        <img role='button' src={arrowRight} alt="indicators" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" />
      </div>
      <div className="carousel-inner">
        {testimonies.map((testimony, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <img src={quotation} alt="" className='mb-4' />
              <div className='container testimony-text ps-3'>
                <p className=''>{testimony.text}</p>
                <h4 className='custom-besleyFont mb-0 mt-4'>{testimony.author}</h4>
                <h5 className='custom-besleyFont'>{testimony.location}</h5>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default TestimonySection