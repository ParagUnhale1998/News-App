import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfinitScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // const [pageSize] = useState(6)
  // document.title = `NewsBuddy - ${capitalieFirstLetter(
  // props.category

  const capitalieFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    props.setProgress(40);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setArticles(data.articles)
    settotalResults(data.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  })

  const fetchMoreData = async () => {
    setpage(page + 1);
    let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setArticles(articles.concat(data.articles))
    settotalResults(data.totalResults)
    setloading(false)
  }
  return (
    <div className="container my-3 text-center">
      <h1>Top {capitalieFirstLetter(props.category)} Headlines</h1>
      {/* {loading && <Spinner />} */}
      <InfinitScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles &&
              articles.map((article) => {
                return<div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={article.title ? article.title.slice(0, 40) : ""}
                      description={
                        article.description
                          ? article.description.slice(0, 88)
                          : ""
                      }
                      newsUrl={article.url}
                      imageUrl={article.urlToImage}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source}
                    />
                  </div>
              
              })}
          </div>
        </div>
      </InfinitScroll>
    </div>
  );
}
  
  
  News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "",
  };
  
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
