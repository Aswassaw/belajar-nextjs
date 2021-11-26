import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  async function fetchComments() {
    const res = await fetch("/api/comments");
    const comments = await res.json();
    setComments(comments);
  }

  const postComment = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ text: newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const comments = await res.json();
    setComments(comments);
  };

  const deleteComment = async (id) => {
    const res = await fetch("/api/comments/" + id, {
      method: "DELETE",
    });

    const comments = await res.json();
    setComments(comments);
  };

  return (
    <div>
      <h1>Comments Page</h1>
      <button onClick={fetchComments}>Load Comments</button>
      <br />

      <br />
      <form onSubmit={postComment}>
        <label htmlFor='comment'>Comment</label>
        <input
          type='text'
          id='comment'
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        />
        <button type='submit'>Submit</button>
      </form>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.text}</h2>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Comments;
