const { Router } = require("express");
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
   Bots.findOne({
        botid: req.params.id}, (err,bot) => {
        if (!bot) return res.sendStatus(404);
       if (bot.state !== "deleted") return res.sendStatus(404);
        bot.state = 'unverified'
        bot.save
                res.render("resubmit/index", { bot: bot });
    })
});

module.exports = route;
