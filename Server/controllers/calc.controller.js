const sustainModel = require("../models/sustainModel");
const calc = (req, res) => {
  const {totalCarbon , trees} = req.body;
  console.log(totalCarbon, trees);
  const carbonOffset = trees * 30.77;
  const newSustain = new sustainModel({
    totalEmission: totalCarbon,
    totalOffset: carbonOffset,
    totalSustain: carbonOffset / totalCarbon,
  });
  newSustain.save();
  res.json({
    success: true,
    totalSustain: carbonOffset / totalCarbon,
    id: newSustain._id,
  });
};

module.exports = { calc };