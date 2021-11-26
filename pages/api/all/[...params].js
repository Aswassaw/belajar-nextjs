export default function handler(req, res) {
  const allParams = [];

  req.query.params.forEach((param, index) => {
    allParams.push({
      id: index + 1,
      name: param,
    });
  });

  res.status(200).json(allParams);
}
