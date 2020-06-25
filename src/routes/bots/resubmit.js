const { Router } = require("express");
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
    let clientid = req.params.id;
    let bot = await Bots.updateOne({ botid: clientid }, { $set: { state: "unverified" } })
    if (!bot) return res.sendStatus(404);
    if (bot.state !== 'deleted') return res.sendStatus(404);
    res.render("resubmit/index", { bot: bot });
});

module.exports = route;
