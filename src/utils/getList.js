const Bots = require("@models/bots");

module.exports = async () => {
    Bots.find({
        state: "verified"
    }).sort([
    ['descending']
  ]).exec((err, res) => {
    })
};
