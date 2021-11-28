export default function handler(req, res) {
  res.setPreviewData({user: "Andry"});
  res.redirect("/" + req.query.redirect);
}
