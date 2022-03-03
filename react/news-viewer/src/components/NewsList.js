import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=ca${query}&apiKey=d7d160b2419b458b8b5000d17cab83dd`
//         );
//         setArticles(response.data.articles);
//       } catch(e) {
//         console.log(e);
//       }
//
//       setLoading(false);
//     };
//
//     fetchData();
//   }, [category]);
//
//   if(loading) {
//     return <NewsListBlock>Loading...</NewsListBlock>
//   }
//
//   if(!articles) {
//     return null;
//   }
//
//   return (
//     <NewsListBlock>
//       {articles.map(article => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   )
// }

// custom hook (usePromise)

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=ca${query}&apiKey=d7d160b2419b458b8b5000d17cab83dd`
    );
  }, [category]);


  // loading is on
  if(loading) {
    return <NewsListBlock>Loading...</NewsListBlock>
  }

  // response is not set yet
  if(!response) {
    return null;
  }

  // error has occurred
  if(error) {
    return <NewsListBlock>Error!</NewsListBlock>
  }

  // response is valid
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;
