import React from 'react'
import NewsBoard from './components/NewsBoard'

const Home = ({ category }) => {
  return (
    <div className='scroll-smooth overflowX-hidden '>
      {
        category == 'general' ?
          <h2 className='text-stone-700 text-lg m-4 md:text-2xl'>Top Headlines</h2>
          :
          <h2 className='capitalize text-stone-700 text-xl m-4'>{category} Headlines</h2>
      }
      <div className="feed">
        <NewsBoard category={category} />
      </div>
    </div>
  )
}

export default Home