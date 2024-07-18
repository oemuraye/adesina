import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import newsImg1 from '../../utils/images/blogImg1.png';
import newsImg2 from '../../utils/images/blogImg2.png';

import './blog.css';

const Blog = () => {
  const blogNewsDetails = [
      { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg1 },
      { title: 'How to deal with bad debts', date: 'July 12, 2024', displayImg: newsImg2 },
      { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg1 },
      { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg2 },
      { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg1 },
      { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg2 },
  ];
  useScrollAnimation();
  const navigate = useNavigate();

  const goToBlogDetails = (details) => {
    navigate('/blog_details', { state: { details } })
  }

  return (
    <main className='page-width blog-section container-fluid my-5 pb-5'>

      <h1 className='mb-4'>Recent news</h1>

      <section className="row blog-news my-5 js-scroll fade-in">
        {blogNewsDetails.map((detail, index) => (
          <div role='button' onClick={() => goToBlogDetails(detail)} key={index} className="col-md-4 col-sm-12 my-md-5 my-2">
            <div className="imgHover_effect news-item">
              <img src={detail.displayImg} alt="newsImg" className="img-fluid" />
              <div className="overlay"></div>
              <div className="news-details">
                <h4 className="custom-besleyFont mb-0">{detail.title}</h4>
                <p>{detail.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

    </main>
  )
}

export default Blog