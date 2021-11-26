import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const res = await fetch("/api/comments");
    const comments = await res.json();
    setComments(comments);
  }

  return (
    <div>
      <h1>Comments Page</h1>
      <button onClick={fetchComments}>Load Comments</button>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default Comments;
