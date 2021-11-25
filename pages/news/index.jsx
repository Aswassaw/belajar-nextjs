import React from "react";
import NewList from "../../components/NewList";

const News = ({ news }) => {
  console.log(news);

  return (
    <div>
      <h1>List of News</h1>
      <NewList news={news} />
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/news");
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
}
