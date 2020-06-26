const Bots = require("@models/bots");

module.exports = async () => {
const bots = await Bots.find({
}, (err, res) => {
    res.filter(bot => bot.state != "deleted")
}, { _id: false, auth: false })
};
