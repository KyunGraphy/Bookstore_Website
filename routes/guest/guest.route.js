const express = require("express");
const route = express.Router();
const db = require('../../utils/db');

route.get("/", async function (req, res) {
  const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

  res.render("home", {
      layout: "guestLay",
      title: "Home",
      topSeller
  });
})

route.get("/products", async function (req, res) {
  const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

  if (req.query.cate) {
    const proList = await db.load(`SELECT * FROM books.book WHERE category = '${req.query.cate}';`)
    res.render("vwGuest/products_guest", {
      layout: "guestLay",
      title: "Products",
      proList,
      topSeller
    });
  } else if (req.query.itemSearch) {
    const proList = await db.load(`SELECT * FROM books.book WHERE book.title LIKE '%${req.query.itemSearch}%';`)
    res.render("vwGuest/products_guest", {
      layout: "guestLay",
      title: "Products",
      proList,
      topSeller
    });
  } else {
    const proList = await db.load(`SELECT * FROM books.book;`)
    res.render("vwGuest/products_guest", {
      layout: "guestLay",
      title: "Products",
      proList,
      topSeller
    });
  }
});

route.post("/guestFilter", async function (req, res) {
  // Filter products
  const proList = await db.load(`SELECT * FROM books.book where sellPrice >= ${req.body.minPrice} and sellPrice <= ${req.body.maxPrice};`)

  res.render("vwCustomer/products_customers", {
    layout: "guestLay",
    title: "Products",
    proList,
    topSeller: req.topSeller,
  });
})

route.get("/detail", async function (req, res) {
  const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

  const items = await db.load(`SELECT * FROM books.book WHERE SKU = ${req.query.SKU};`)
  const item = items[0];

  const top8book = await db.load(`SELECT * FROM books.book limit 8;`)
  res.render("vwGuest/detail_guest", {
    layout: "guestLay",
    title: "Details",
    item,
    top8book,
    topSeller
  });
});

// route.get("/cart", async function (req, res) {
//   const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

//   res.render("vwGuest/cart", {
//     layout: "guestLay",
//     title: "Cart",
//     topSeller
//   });
// });

route.get("/contact", async function (req, res) {
  const topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 4;`)

  res.render("vwGuest/contact", {
    layout: "guestLay",
    title: "Contact Us",
    topSeller
  });
});

route.post("/filter", function (req, res) {
  console.log(req);
  res.send("FILTER")
})

module.exports = route;
