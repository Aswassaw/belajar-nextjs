import { comments } from "../../../data/comments";

export default async function handler(req, res) {
  // Method GET
  if (req.method === "GET") {
    const { commentId } = req.query;
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    res.status(200).json(comment);
  }
}
