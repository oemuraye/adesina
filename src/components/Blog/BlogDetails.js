import React from 'react'
import { useLocation } from 'react-router-dom'

import useScrollAnimation from '../../hooks/useScrollAnimation';

const BlogDetails = () => {
    useScrollAnimation();
    const location = useLocation();
    const { details } = location.state;

  return (
    <section className='page-width blog_details-section container-fluid pb-5 my-5'>
        <h1 className='mb-4 pt-4'>{details.title}</h1>

        <section className="property_details-section">
            <div className='imgHover_effect my-5'><img src={details.displayImg} alt="displayImg" className='img-fluid' width="100%" /></div>
        
            <div className="container-fluid custom-neueFont_roman blog-details-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, autem consequuntur voluptate voluptates porro reprehenderit consectetur pariatur veritatis quaerat, nemo neque esse similique natus labore eligendi rerum sint? Soluta, animi commodi. Commodi facilis doloremque rem saepe deserunt, nisi aliquam laborum, quod cum adipisci repellat natus! Iste inventore tempore molestias eveniet!</p>
            </div>
        </section>

    </section>
  )
}

export default BlogDetails