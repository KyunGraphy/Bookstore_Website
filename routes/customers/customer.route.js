const { response } = require("express");
const express = require("express");
const route = express.Router();
const db = require('../../utils/db');

route.use(topSeller)

route.get("/", async function (req, res) {
  // Select user's name

  res.render("home", {
    layout: "customLay",
    title: "Home",
    topSeller: req.topSeller,
    name: req.session.userName.toUpperCase(),
    user: req.session.userSession
  });
})

route.get("/products", async function (req, res) {
  if (req.query.cate) {
    // Filter products
    const proList = await db.load(`SELECT * FROM books.book WHERE category = '${req.query.cate}';`)

    res.render("vwCustomer/products_customers", {
      layout: "customLay",
      title: "Products",
      proList,
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      user: req.session.userSession
    });
  } else if (req.query.itemSearch) {
    // Filter products
    const proList = await db.load(`SELECT * FROM books.book WHERE book.title LIKE '%${req.query.itemSearch}%';`)

    res.render("vwCustomer/products_customers", {
      layout: "customLay",
      title: "Products",
      proList,
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      user: req.session.userSession
    });
  } else {
    const proList = await db.load(`SELECT * FROM books.book;`)
    res.render("vwCustomer/products_customers", {
      layout: "customLay",
      title: "Products",
      proList,
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      user: req.session.userSession
    });
  }
});

route.get("/detail", async function (req, res) {
  // Filter products
  const items = await db.load(`SELECT * FROM books.book WHERE SKU = ${req.query.SKU};`)
  const item = items[0];
  // await db.load(`UPDATE books.book SET view = '${item.view + 1}' WHERE (SKU = '${req.query.SKU}');`)
  // res.locals.SKU = req.query.SKU

  const react = await db.load(`SELECT * FROM books.like WHERE like.username = '${req.session.userSession}' AND like.SKU = '${req.query.SKU}';`);
  var reactRs = true;
  if (react.length == 0) {
    reactRs = false;
  }

  // Filter comment
  const comments = await db.load(`SELECT * FROM books.comment join books.customer where books.comment.username = books.customer.username and SKU = '${req.query.SKU}';`)

  // Count Cmt
  const cmtCount = await db.load(`select count(*) as cmt from books.comment where SKU = '${req.query.SKU}';`)

  res.render("vwCustomer/detail_customers", {
    layout: "customLay",
    title: "Details",
    item,
    cmtCount: cmtCount[0],
    comments,
    reactRs,
    topSeller: req.topSeller,
    name: req.session.userName.toUpperCase(),
    user: req.session.userSession
  });
});

route.post("/detail", async function (req, res) {

  await db.load(`INSERT INTO books.contain (SKU, username, quantity) VALUES ('${req.query.SKU}', '${req.session.userSession}', '${req.body.qty}');`)
  res.redirect('/custom/products')
});

route.post("/cmt", async function (req, res) {
  const today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();

  await db.load(`INSERT INTO books.comment (SKU, username, content, date) VALUES ('${req.body.SKU}', '${req.session.userSession}', '${req.body.comment}', '${date}');`)

  res.redirect(`/custom/detail?SKU=${req.body.SKU}`)
})

route.get("/cart", async function (req, res) {
  const cartList = await db.load(`SELECT * FROM books.contain join books.book WHERE books.contain.SKU = books.book.SKU and username = '${req.session.userSession}';`)
  const usersData = await db.load(`SELECT * FROM books.customer WHERE username = '${req.session.userSession}';`)
  const userData = usersData[0];

  const itemExist = cartList.length === 0;

  for (let i = 0; i < cartList.length; i++) {
    cartList[i].totalPrice = cartList[i].sellPrice * cartList[i].quantity;
    cartList[i].totalPrice = +cartList[i].totalPrice.toFixed(3);
  }

  const totalPriceList = cartList.map(function (x) {
    return x.totalPrice
  })
  const sumPrice = +totalPriceList.reduce(getSum, 0).toFixed(3);

  function getSum(total, num) {
    return total + num;
  }

  res.render("vwCustomer/cart", {
    layout: "customLay",
    title: "Cart",
    topSeller: req.topSeller,
    itemExist,
    cartList,
    userData,
    sumPrice,
    name: req.session.userName.toUpperCase(),
    user: req.session.userSession
  });
});


route.post('/cart', async function (req, res) {
  const today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const datetime = date + " " + time;

  await db.load(`UPDATE books.customer SET phone = '${req.body.phone}', address = '${req.body.address}' WHERE (username = '${req.session.userSession}');`)

  const cartList = await db.load(`SELECT * FROM books.contain join books.book WHERE books.contain.SKU = books.book.SKU and username = '${req.session.userSession}';`)

  const recentPrice = await db.load(`SELECT * FROM books.cart where username = 'parky';`)
  await db.load(`UPDATE books.cart SET price = '${parseFloat(req.body.sumPrice) + recentPrice[0].price}' WHERE (username = '${req.session.userSession}');`)

  for (let i = 0; i < cartList.length; i++) {
    await db.load(`INSERT INTO books.transaction (username, time, book, SKU, quantity, status) VALUES ('${req.session.userSession}', '${datetime}', '${cartList[i].title}', '${cartList[i].SKU}', '${cartList[i].quantity}', 'pending');`)
  }

  res.redirect("/custom/checkOut")
})

route.post('/delCartItem', async function (req, res) {
  await db.load(`DELETE FROM books.contain WHERE (cartId = '${req.query.cartId}');`)

  res.redirect('/custom/cart')
})

route.get("/checkOut", async function (req, res) {
  const cartList = await db.load(`SELECT * FROM books.contain join books.book WHERE books.contain.SKU = books.book.SKU and username = '${req.session.userSession}';`)
  const user = await db.load(`SELECT * FROM books.customer where username = '${req.session.userSession}';`)

  for (let i = 0; i < cartList.length; i++) {
    cartList[i].totalPrice = cartList[i].sellPrice * cartList[i].quantity;
    cartList[i].totalPrice = +cartList[i].totalPrice.toFixed(3);
  }

  const totalPriceList = cartList.map(function (x) {
    return x.totalPrice
  })
  const sumPrice = +totalPriceList.reduce(getSum, 0).toFixed(3);

  function getSum(total, num) {
    return total + num;
  }

  await db.load(`DELETE from books.contain where username = '${req.session.userSession}';`)

  res.render("vwCustomer/checkOut", {
    layout: "customLay",
    title: "Check Out",
    cartList,
    sumPrice,
    priceIncludeShip: sumPrice + 5,
    name: req.session.userName.toUpperCase(),
    user: user[0]
  })
})

route.get("/order", async function (req, res) {
  const orderList = await db.load(`SELECT * FROM books.transaction join books.book where books.transaction.username = "${req.session.userSession}" and books.transaction.SKU = books.book.SKU;`)
  const user = await db.load(`SELECT * FROM books.customer where username = '${req.session.userSession}';`)
  
  for (let i = 0; i < orderList.length; i++) {
    orderList[i].isPending = false;
    if (orderList[i].status === 'pending') {
      orderList[i].isPending = true;
    }

    orderList[i].totalPrice = orderList[i].quantity * orderList[i].sellPrice;
    orderList[i].totalPrice = +orderList[i].totalPrice.toFixed(3);
  }

  const totalPriceList = orderList.map(function (x) {
    return x.totalPrice
  })
  const sumPrice = +totalPriceList.reduce(getSum, 0).toFixed(3);

  function getSum(total, num) {
    return total + num;
  }

  res.render("vwCustomer/order", {
    layout: "customLay",
    title: "ORDERS",
    user : user[0],
    sumPrice,
    orderList,
    name: req.session.userName.toUpperCase(),
  })
})

route.post("/order", async function (req, res) {
  await db.load(`DELETE FROM books.transaction WHERE (transId = '${req.body.transId}');`)

  res.redirect('/custom/order')
})

route.get("/contact", async function (req, res) {
  res.render("vwCustomer/contact", {
    layout: "customLay",
    title: "Contact Us",
    topSeller: req.topSeller,
    name: req.session.userName.toUpperCase(),
    user: req.session.userSession
  });
});

route.post("/customFilter", async function (req, res) {
    // Filter products
    const proList = await db.load(`SELECT * FROM books.book where sellPrice >= ${req.body.minPrice} and sellPrice <= ${req.body.maxPrice};`)

    res.render("vwCustomer/products_customers", {
      layout: "customLay",
      title: "Products",
      proList,
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      user: req.session.userSession
    });
})

route.get("/wishlist", async function (req, res) {
  const wishlist = await db.load(`SELECT * FROM books.like inner join books.book on books.like.SKU = books.book.SKU and books.like.username = '${req.session.userSession}';`)

  res.render("vwCustomer/wishlist", {
    layout: "customLay",
    title: "Wishlist",
    name: req.session.userName.toUpperCase(),
    wishlist
  })
})

// ----------------------PROFLE----------------------

route.get("/profile", async function (req, res) {
  req.random = Math.floor(Math.random() * 12) + 1;
  // Filter user
  const getUsers = await db.load(`SELECT * FROM books.customer WHERE username = '${req.session.userSession}'`)
  const getUser = getUsers[0];

  res.render("vwAccount/profile", {
    layout: false,
    title: "Profile",
    random: req.random,
    getUser,
    user: req.session.userSession
  })
})

route.post("/profile", async function (req, res) {
  await db.load(`UPDATE books.customer SET name = '${req.body.name}', email = '${req.body.email}', phone = '${req.body.phone}', address = '${req.body.address}' WHERE (username = '${req.session.userSession}');`)
  // const names = await db.load(`SELECT customer.name FROM books.customer where books.customer.username = '${req.session.userSession}';`)

  res.render("home", {
    layout: "customLay",
    title: "Home",
    topSeller: req.topSeller,
    name : req.body.name.toUpperCase(),
    userSession : req.session.userSession
  });
})

route.get("/password", function (req, res) {
  req.random = Math.floor(Math.random() * 12) + 1;

  res.render("vwAccount/changePassword", {
    layout: false,
    title: "Change Password",
    random: req.random,
    user: req.session.userSession
  })
})

route.post("/password", async function (req, res) {
  const getUsers = await db.load(`SELECT * FROM books.account WHERE username = '${req.session.userSession}';`)

  if (req.body.oldPassword === getUsers[0].password) {
    await db.load(`UPDATE books.account SET password = '${req.body.newPassword}' WHERE (username = '${req.session.userSession}');`)
    res.redirect(`/custom?username=${req.session.userSession}`)
  } else {
    res.render("vwAccount/changePassword", { 
      layout: false,
      title: "Change Password",
      random: req.random,
      errorMes: "Wrong password !!"
    });
  }
})

// ----------------------AJAX----------------------

route.get('/ajax', async function (req, res) {
  if (req.query.react == 'dislike') {
    const id = await db.load(`SELECT idLike FROM books.like WHERE username = '${req.session.userSession}' AND SKU = '${req.query.SKU}';`)
    await db.load(`DELETE FROM books.like WHERE (idLike = '${id[0].idLike}');`)
  } else if (req.query.react == 'like') {
    await db.load(`INSERT INTO books.like (username, SKU) VALUES ('${req.session.userSession}', '${req.query.SKU}');`)
  } else {
    console.log("Error");
  }

  const data = await db.load(`SELECT * FROM books.like`)
  res.json(data);
})

// ----------------------MIDDLEWARES----------------------:

async function topSeller (req, res, next) {
  req.topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 8;`);
  next();
}

module.exports = route;
