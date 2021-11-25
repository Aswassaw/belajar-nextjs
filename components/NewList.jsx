import Link from "next/link";
import React from "react";

const NewList = ({ news }) => {
  return (
    <div>
      {news.map((newItem) => (
        <div
          key={newItem.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h5 style={{ margin: 0 }}>{newItem.title}</h5>
          <p style={{ margin: 0 }}>{newItem.description}</p>
          <Link href={`/newItems/${newItem.category}`} passHref>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewList;
