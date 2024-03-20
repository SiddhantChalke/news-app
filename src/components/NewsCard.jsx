import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({id, news}) => {
    const {title, description, url, urlToImage} = news;
    
    return (
      <Link className='link' to={url} >
        <div className="w-1/2" key={id}>
          <div className="image">
            <img src={urlToImage} alt="" className="w-1/4" />
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          
        </div>
      </Link>
      
    )
}

export default NewsCard