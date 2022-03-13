const AlgoJSON = require("../../data/algorithms.json");

export default function handler(req, res) {
  res.status(200).json(AlgoJSON);
}
