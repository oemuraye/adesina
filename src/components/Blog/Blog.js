import useScrollAnimation from '../../hooks/useScrollAnimation';

import newsImg from '../../utils/images/blogImg1.png';
import newsImgShade from '../../utils/images/imageShade.png';

import './blog.css';

const Blog = () => {
  const blogNewsDetails = [
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
    { title: 'Real estate wealth for investors', date: 'July 12, 2024', displayImg: newsImg },
];
  useScrollAnimation();

  return (
    <main className='page-width blog-section container-fluid my-5 pb-5'>

      <h1 className='mb-4'>Recent news</h1>

      <section className="row blog-news my-5 js-scroll fade-in">
        {blogNewsDetails.map((detail, index) => (
          <div key={index} className="col-md-4 col-sm-12 my-md-5 my-2">
            <div className='imgHover_effect news-item'>
              <div class="overlay"></div>
              <img src={detail.displayImg} alt="newsImg" className='img-fluid' />
              <div className="news-details">
                <h4 className='custom-besleyFont mb-0'>{detail.title}</h4>
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