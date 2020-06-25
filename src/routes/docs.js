const { Router } = require("express");
const { GUILD_INVITE } = process.env;

const route = Router();

route.get("/", async (req, res, next) => {
       res.render("user/me", data);
});

module.exports = route;
