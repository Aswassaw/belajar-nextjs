import React from "react";

const NewListByCategory = ({ news, category }) => {
  console.log(news);

  return (
    <div>
      <h1>News By Category</h1>

      {news.map((newItem) => {
        return <div
          key={newItem.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h5 style={{ margin: 0 }}>{newItem.title}</h5>
          <p style={{ margin: 0 }}>{newItem.description}</p>
        </div>;
      })}
    </div>
  );
};

export default NewListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const res = await fetch(`http://localhost:8000/news?category=${category}`);
  const news = await res.json();

  console.log(news);

  return {
    props: {
      news,
      category,
    },
  };
}
