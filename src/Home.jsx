import React from 'react'
import NewsBoard from './components/NewsBoard'

const Home = ({category}) => {
  return (
    <div>
      {
      category=='general'?<h2>Top Headlines</h2>: <h2>{category} Headlines</h2>
      }
        <div className="feed">
            <NewsBoard category={category} />
        </div>
    </div>
  )
}

export default Home