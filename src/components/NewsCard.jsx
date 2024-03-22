import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ id, news }) => {
  const { title, description, url, urlToImage, source, author } = news;

  return (

    <div className="h-68 flex ">
      <Link className='cursor-pointer' to={url} >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          {urlToImage ?
            <img className="w-full" src={urlToImage} alt={source.name} />
            : <div className='bg-slate-500 h-52 flex items-center justify-center'><p className='text-gray-100 text-center text-3xl'>{source.name}</p></div>
          }
          <div className="px-4 py-4 md:px-6">
            <div className="md:font-bold text-xl md:mb-2">{title}</div>
            <p className="text-gray-700 text-base truncate">{description}</p>
          </div>
          <div className="px-6 py-4">
            {author ? <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{author}</span> : ''}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{source.name}</span>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default NewsCard