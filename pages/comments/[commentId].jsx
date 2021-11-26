import React from "react";

const CommentDetail = ({ comment }) => {
  return (
    <div>
      <h1>Comment Detail</h1>
      <h2>
        {comment.id} - {comment.text}
      </h2>
    </div>
  );
};

export default CommentDetail;

export async function getServerSideProps(context) {
  // Tips: Kita tidak boleh memanggil rute api kita sendiri di dalam pre rendering karena akan memperlambat aplikasi lebih dari 100ms. Sebagai gantinya lalukan query saja di dalam sini dan jangan melakukan request api.

  const res = await fetch(
    "http://localhost:3000/api/comments/" + context.params.commentId
  );
  const comment = await res.json();

  // Jika post tidak ditemukan
  if (!comment.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      comment,
    },
  };
}
