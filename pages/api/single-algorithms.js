const SingleAlgoJSON = require("../../data/SingleAlgorithms.json");

export default function handler(req, res) {
  res.status(200).json(SingleAlgoJSON);
}
