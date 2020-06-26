const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({state: "verified"}, { _id: false, auth: false })
return bots.sort(bot => bot.state != "deleted")
};
