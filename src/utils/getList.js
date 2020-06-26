const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({
  state: "verified"}, (err, res) => {
})
};
