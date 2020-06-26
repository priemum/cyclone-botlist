const Bots = require("@models/bots");

module.exports = async () => {
    Bots.find({
    }).sort([
    ['descending']
  ]).exec((err, res) => {
    })
};
