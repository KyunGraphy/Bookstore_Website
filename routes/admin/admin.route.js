const express = require("express");
const route = express.Router();
const multer = require('multer');
const fs = require('fs');
const db = require('../../utils/db');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/imgProducts')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.JPG')
  }
})
 
const upload = multer({ storage: storage })

route.use(topSeller)

route.get("/", async function (req, res) {
  res.render("home", {
    layout: "adminLay",
    title: "Home",
    topSeller : req.topSeller,
    name : req.session.userName.toUpperCase(),
    userSession : req.session.userSession
  });
})

route.get("/products", async function (req, res) {
  const userSession = req.session.userSession
  const name = req.session.userName;
  if (req.query.cate) {
    const proList = await db.load(`SELECT * FROM books.book WHERE category = '${req.query.cate}';`)
    res.render("vwAdmin/products_admin", {
      layout: "adminLay",
      title: "Products",
      proList,
      topSeller : req.topSeller,
      name : req.session.userName.toUpperCase(),
      userSession
    });
  } else if (req.query.itemSearch) {
    const proList = await db.load(`SELECT * FROM books.book WHERE book.title LIKE '%${req.query.itemSearch}%';`)
    res.render("vwAdmin/products_admin", {
      layout: "adminLay",
      title: "Products",
      proList,
      topSeller : req.topSeller,
      name : req.session.userName.toUpperCase(),
      userSession
    });
  } else {
    const proList = await db.load(`SELECT * FROM books.book;`)
    res.render("vwAdmin/products_admin", {
      layout: "adminLay",
      title: "Products",
      proList,
      topSeller : req.topSeller,
      name : req.session.userName.toUpperCase(),
      userSession
    });
  }
});

route.get("/edit", async function (req, res) {
  const items = await db.load(`SELECT * FROM books.book WHERE SKU = ${req.query.SKU};`)
  const item = items[0]

  res.render("vwAdmin/edit", {
    layout: "adminLay",
    title: "Edit",
    item,
    topSeller : req.topSeller,
    name : req.session.userName.toUpperCase()
  });
});

route.get("/add", async function (req, res) {
  res.render("vwAdmin/add", {
    layout: "adminLay",
    title: "Add Products",
    topSeller : req.topSeller,
    name : req.session.userName.toUpperCase()
  });
});

route.post("/add", upload.single("avatar"), async function (req, res) {
  const SKUList = await db.load(`SELECT * FROM books.book where SKU = ${req.body.SKU};`)
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400

    // Xóa tập tin
    fs.unlink(`${file.path}`, function (err) {
      if (err) {
        throw err;
      } 
      console.log('File deleted!');
    });

    res.render("vwAdmin/add", {
      layout: "adminLay",
      title: "Add Products",
      errorMes: "Invalid upload file",
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      userSession: req.session.userSession
    });
  }
  if (SKUList.length === 0) {

    // Đổi tên tập tin
    fs.rename(`${file.path}`, `public\\imgProducts\\${req.body.SKU}.JPG`, function (err) {
      if (err) {
        throw err;
      }
      console.log('File Renamed!');
    });
    await db.load(`INSERT INTO books.book (SKU, title, category, author, headDescription, description, oriPrice, sellPrice) VALUES ('${req.body.SKU}', '${req.body.title}', '${req.body.category}', '${req.body.author}', '${req.body.headDescription}', '${req.body.description}', '${req.body.oriPrice}', '${req.body.sellPrice}');`)
    res.redirect("/admin/products")
  } else {

    // Xóa tập tin
    fs.unlink(`${file.path}`, function (err) {
      if (err) {
        throw err;
      } 
      console.log('File deleted!');
    });

    res.render("vwAdmin/add", {
      layout: "adminLay",
      title: "Add Products",
      errorMes: "SKU has already existed",
      topSeller: req.topSeller,
      name: req.session.userName.toUpperCase(),
      userSession: req.session.userSession
    });
  }
});

route.post("/update", async function (req, res) {
  await db.load(`UPDATE books.book SET category = '${req.body.category}', author = '${req.body.author}', description = '${req.body.description}', oriPrice = '${req.body.oriPrice}', sellPrice = '${req.body.sellPrice}' WHERE (SKU = '${req.body.SKU}');`)
  res.redirect("/admin/products")
})

route.post("/delete", function (req, res) {
  db.load(`DELETE FROM books.book WHERE (SKU = '${req.body.SKU}');`)
  res.redirect("/admin/products")

  fs.unlink(`./public/imgProducts/${req.body.SKU}.JPG`, function (err) {
    if (err) {
      throw err;
    } 
    console.log('File deleted!');
  });
})

route.get("/pending", async function (req, res) {
  const pendingList = await db.load(`SELECT * FROM books.transaction join books.book where books.transaction.SKU = books.book.SKU AND status = "pending";`)

  for (let i = 0; i < pendingList.length; i++) {
    pendingList[i].totalPrice = pendingList[i].quantity * pendingList[i].sellPrice;
    pendingList[i].totalPrice = +pendingList[i].totalPrice.toFixed(3);
  }

  res.render("vwAdmin/orderPending", {
    layout: "adminLay",
    title: "PENDING LIST",
    pendingList,
    name : req.session.userName.toUpperCase()
  })
})

route.post("/pending", async function (req, res) {
  if (req.query.f === 'accept') {
    for (let i = 0; i < req.body.transId.length; i++) {
      await db.load(`UPDATE books.transaction SET status = 'accept' WHERE (transId = '${req.body.transId[i]}');`)
    }
  } else if (req.query.f === 'cancel') {
    for (let i = 0; i < req.body.transId.length; i++) {
      await db.load(`UPDATE books.transaction SET status = 'cancel' WHERE (transId = '${req.body.transId[i]}');`)
    }
  } else {
    await db.load(`UPDATE books.transaction SET status = 'accept';`)
  }

  res.redirect("/admin/pending")
})

route.get("/profile", async function (req, res) {
  req.random = Math.floor(Math.random() * 12) + 1;
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
  await db.load(`UPDATE books.customer SET name = '${req.body.name}', email = '${req.body.email}' WHERE (username = '${req.session.userSession}');`)
  const names = await db.load(`SELECT customer.name FROM books.customer where books.customer.username = '${req.session.userSession}';`)

  res.render("home", {
    layout: "adminLay",
    title: "Home",
    topSeller : req.topSeller,
    name : names[0].name.toUpperCase(),
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
    res.redirect(`/admin?username=${req.session.userSession}`)
  } else {
    res.render("vwAccount/changePassword", { 
      layout: false,
      title: "Change Password",
      random: req.random,
      errorMes: "Wrong password !!"
  });
  }
})

async function topSeller (req, res, next) {
  req.topSeller = await db.load(`SELECT * FROM books.book order by sellPrice desc limit 8;`);
  next();
}

module.exports = route;
