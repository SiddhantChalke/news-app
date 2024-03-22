import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios'
import Spinner from './Spinner';

const NewsBoard = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    // fetch(url)
    // .then(response=> response.json())
    // .then(data => setArticles(data.articles));
    async function fetchData() {
      const res = await axios.get(url);
      const data = res.data;
      setArticles(data.articles);
      setLoading(false);
    }
    fetchData();

  }, [category])

  return loading ? <Spinner /> :
    (
      <div className='w-full flex flex-wrap justify-around gap-4 md:gap-8 md:-mx-4'>
        {
          articles.map((news, i) => {
            return <NewsCard key={i} news={news} />
          })
        }
      </div>
    )
}

export default NewsBoard