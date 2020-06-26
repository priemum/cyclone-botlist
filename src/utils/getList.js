const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({}, { _id: false, auth: false }).sort({ createdAt: 1 })
 return bots.filter(bot => bot.state != "deleted")
};
