const db = require("./models");
const express = require("express");
const app = express.Router();

module.exports = function(app, passport) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/view-data", function(req, res) {
        if (req.user) {
            db.Fuel.findAll().then(function(data) {
                console.log(data);
                res.render("view-data", { fueldata: data });
            });
        } else {
            res.send("You must be signed in");
        };
    });

    app.post("/signup", passport.authenticate("local-signup"), function(req, res) {
        console.log(req.user);
        res.render("two-buttons");
    });

    app.post("/signin", passport.authenticate("local-signin"), function(req, res) {
        console.log(req.use);
        res.render("two-buttons");
    });
}