import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4edac652b62b4f54b47ac9ae8582188a`;
        // fetch(url)
        // .then(response=> response.json())
        // .then(data => setArticles(data.articles));
        async function fetchData(){
          const res = await axios.get(url);
          const data = res.data;
          setArticles(data.articles);
          // console.log(res)
        }
        fetchData();
        
    },[category])

  return (
    <div className='w-full py-2 px-4 flex flex-wrap justify-around gap-8'>
        {
        articles.map((news, i)=>{
            return <NewsCard key={i} news={news} />
            
        })
        }
    </div>
  )
}

export default NewsBoard