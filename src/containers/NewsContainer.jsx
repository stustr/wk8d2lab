import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";

const NewsContainer = () => {
  const [newsTitles, setNewsTitles] = useState([]);

  useEffect(() => {
    squirrel();
  }, []);

  const squirrel = () => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/topstories.json?limitToFirst=10&orderBy="$key"`
    )
      .then((res) => res.json())
      .then((ids) => {
        const newsItems = ids.map((newsItem) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${newsItem}.json`
          ).then((res) => res.json());
        });
        Promise.all(newsItems).then((data) => setNewsTitles(data));
      });
  };

  return (
    <>
      <h1>The news</h1>
      <NewsList newsTitles={newsTitles} />
    </>
  );
};

export default NewsContainer;
