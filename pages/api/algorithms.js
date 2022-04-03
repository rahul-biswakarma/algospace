const AlgoJSON = require("../../data/Algorithms.json");

export default function handler(req, res) {
  res.status(200).json(AlgoJSON);
}
