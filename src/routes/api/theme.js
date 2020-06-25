const { Router } = require("express");

const route = Router();

route.get("/", async (req, res, next) => {
    let theme = req.cookies["theme"]
    if (!theme) {
        res.cookie("theme", "dark");
        return res.redirect(req.header('Referer') || '/');
    } 
     if (theme === "dark") {
             res.redirect(req.header('Referer') || '/');
        return res.cookie("theme", "light")
    }
    if (theme === "light") {
            res.redirect(req.header('Referer') || '/');
        return res.cookie("theme", "dark")
    }
});

module.exports = route;
