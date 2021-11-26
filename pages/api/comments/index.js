import { comments } from "../../../data/comments";

export default function handler(req, res) {
  // Method GET
  if (req.method === "GET") {
    res.status(200).json(comments);
  }

  // Method POST
  else if (req.method === "POST") {
    const text = req.body.text;
    comments.push({ id: new Date().getTime(), text });

    res.status(201).json(comments);
  }
}
