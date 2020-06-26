const Bots = require("@models/bots");

module.exports = async () => {
  const bots = await Bots.find({
    state: "verified"}).sort([
    ['money', 'descending']
  ]).exec((err ,res) => {
  }, { _id: false, auth: false })

};
