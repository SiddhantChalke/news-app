import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({id, news}) => {
    const {title, description, url, urlToImage} = news;
    
    return (
        <div className="w-3/10 h-68 rounded overflow-hidden shadow-md shadow-slate-400 hover:shadow-xl" key={id}>
      <Link className='w-1/2 cursor-pointer' to={url} >
          <div className="overflow-hidden">
            <img src={urlToImage} alt="" className="" />
          </div>
          <h2 className='font-semibold text-lg p-2 '>{title}</h2>
          <p className='text-200 text-lg font-normal px-2 truncate '>{description}</p>
          
      </Link>
        </div>
      
    )
}

export default NewsCard