import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({id, news}) => {
    const {title, description, url, urlToImage} = news;
    
    return (
        <div className="w-64 h-64 shadow-md shadow-slate-400 hover:shadow-xl" key={id}>
      <Link className='w-1/2 cursor-pointer' to={url} >
          <div className="">
            <img src={urlToImage} alt="" className="" />
          </div>
          <h2>{title}</h2>
          {/* <p>{description}</p> */}
          
      </Link>
        </div>
      
    )
}

export default NewsCard