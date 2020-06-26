const Bots = require("@models/bots");

module.exports = async () => {
    const bots = await Bots.find({
        state: "verified"
    }).sort([
    ['descending']
  ]).exec((err, res) => {
    })
};
