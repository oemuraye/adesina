import React from 'react'
import { useLocation } from 'react-router-dom'

import useScrollAnimation from '../../hooks/useScrollAnimation';

const BlogDetails = () => {
    useScrollAnimation();
    const location = useLocation();
    const { details } = location.state;

  return (
    <section className='page-width blog_details-section container-fluid pb-5 my-5'>
        <h1 className='mb-4 pt-4'>{details?.title}</h1>

        <section className="property_details-section">
            <div className='display-img my-5'><img src={details?.displayImg} alt="displayImg" className='img-fluid' width="100%" /></div>
        
            <div className="container-fluid custom-neueFont_roman blog-details-text">
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph2 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph3 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph4 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph5 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph6 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph7 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph8 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph9 }}></p>
              <p dangerouslySetInnerHTML={{ __html: details?.paragraph10 }}></p>
            </div>
        </section>

    </section>
  )
}

export default BlogDetails