const express = require("express");
const exhbs = require("express-handlebars");
const session = require('express-session');
const exhbs_section = require('express-handlebars-sections');

const app = express();

app.use(express.static("./public"));

app.engine(".hbs", exhbs.engine({ 
  extname: ".hbs",
  helpers: {
    section: exhbs_section()
  }
}));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.urlencoded({
  extended: true
}))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.use("/", require('./routes/main.route'))

// ADMIN route
app.use("/admin", require('./routes/admin/admin.route'))

// CUSTOMERS route
app.use("/custom", require('./routes/customers/customer.route'))

// GUEST route
app.use("/guest", require('./routes/guest/guest.route'))

// LOGIN route
app.use("/account", require('./routes/account/account.route'))

app.get("/demo", function (req, res) {
  res.render('demo')
})

app.listen(3000);
