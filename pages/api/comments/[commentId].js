import { comments } from "../../../data/comments";

export default async function handler(req, res) {
  const { commentId } = req.query;

  // Method GET
  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    if (!comment) {
      return res.status(404).json({});
    }

    res.status(200).json(comment);
  }

  // Method DELETE
  else if (req.method === "DELETE") {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    res.status(200).json(comments);
  }
}
