const express = require("express");
const route = express.Router();
const db = require('../utils/db');

// route.get("/guest", async function (req, res) {
//     const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

//     res.render("home", {
//         layout: "guestLay",
//         title: "Home",
//         topSeller
//     });
// })

// route.get("/admin", async function (req, res) {
//     const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

//     res.render("home", {
//         layout: "adminLay",
//         title: "Home",
//         topSeller
//     });
// })

// route.get("/custom", async function (req, res) {
//     const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

//     res.render("home", {
//         layout: "customLay",
//         title: "Home",
//         topSeller
//     });
// })

route.get("/demo", function (req, res) {
    console.log(req);

    res.render("demo", {
        layout: "guestLay",
        title: "Demo",
    });
})

module.exports = route;
