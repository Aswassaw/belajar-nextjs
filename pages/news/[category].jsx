import React from "react";

const NewListByCategory = ({ news, category }) => {
  // console.log(news);

  return (
    <div>
      <h1>News By Category: {category}</h1>

      {news.map((newItem) => {
        return (
          <div
            key={newItem.id}
            style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
          >
            <h5 style={{ margin: 0 }}>{newItem.title}</h5>
            <p style={{ margin: 0 }}>{newItem.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  // console.log(req.headers.cookie);
  // console.log(query);
  res.setHeader("Set-Cookie", ['name="Andry Pebrianto"']);

  const response = await fetch(
    `http://localhost:8000/news?category=${params.category}`
  );
  const news = await response.json();

  console.log("NewList By Category");

  return {
    props: {
      news,
      category: params.category,
    },
  };
}
