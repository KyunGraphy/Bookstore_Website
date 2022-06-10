const express = require("express");
const route = express.Router();
const db = require('../../utils/db');
const request = require('request');
const nodemailer = require('nodemailer');

const options = {
    url: 'https://10.134.136.112:8888/casserver/login?service=http%3A%2F%2F10.134.137.120%3A8000%2Fpiccclaim%2Fj_acegi_security_check%3BPICC_CLAIM_Cookie%3DWTXhd5pQY4SwQJpdKGxMQhXvl0L4Qp7pJhPrprm0ptmCqlW7JHkS%21566150954%21-472537668',
    // proxy: 'http://127.0.0.1:8888'
    secureProtocol: 'TLSv1_method'
};
request.get(options, function (err, response, data) {
    console.log(data, err, response);
});

route.use(randomPic);

route.get("/", function (req, res) {
    req.session.userSession = undefined;
    req.session.userName = undefined;

    res.render("vwAccount/login", { 
        layout: false,
        title: "Account",
        random: req.random
    });
})

route.post("/", async function (req, res) {  
    // Load user account with username
    const userList = await db.load(`SELECT * FROM books.account WHERE username = '${req.body.username}';`)

    if (userList.length === 0) {
        res.render("vwAccount/login", { 
            layout: false,
            title: "Account",
            random: req.random,
            errorMes: "Account does not exist !!"
        });
    }

    if (req.body.password === userList[0].password) {
        const names = await db.load(`SELECT customer.name FROM books.customer WHERE books.customer.username = '${req.body.username}';`)

        req.session.userSession = req.body.username;
        
        if (userList[0].role === 'client') {
            req.session.userName = names[0].name;
            res.redirect(`/custom?username=${req.body.username}`);
        } else {
            req.session.userName = "Admin";
            res.redirect(`/admin?username=${req.body.username}`);
        }
    } else {
        res.render("vwAccount/login", { 
            layout: false,
            title: "Account",
            random: req.random,
            errorMes: "Invalid username or password !!"
        });
    }
})

route.get("/signup", function (req, res) {
    res.render("vwAccount/signUp", { 
        layout: false,
        title: "Sign Up",
        random: req.random
    });
})

route.post("/signup", async function (req, res) {
    // Load user account with username
    const userList = await db.load(`SELECT * FROM books.account WHERE username = '${req.body.username}';`)

    if (userList.length == 0) {
        await db.load(`INSERT INTO books.customer (username, name, email, phone, address) VALUES ('${req.body.username}', '${req.body.name}', '${req.body.email}', '${req.body.phone}', '${req.body.address}');`)
        await db.load(`INSERT INTO books.account (username, password, role) VALUES ('${req.body.username}', '${req.body.password}', 'client');`)
        await db.load(`INSERT INTO books.cart (username, price) VALUES ('${req.body.username}', '0');`)
        res.redirect("/account");
    } else {
        res.render("vwAccount/signUp", { 
            layout: false,
            title: "Sign Up",
            random: req.random,
            errorMes: "Username has already existed !!"
        });
    }
})

route.get("/forgot", function (req, res) {
    res.render("vwAccount/forgot", { 
        layout: false,
        title: "Forgot Password",
        random: req.random
    });
})

route.post("/forgot", async function (req, res) {
    console.log('#################################################################################');
    console.log(req.body.email);
    const userList = await db.load(`SELECT * FROM books.customer WHERE username = '${req.body.username}' AND email = '${req.body.email}';`)

    if (userList.length === 1) {
        const newPassword = Math.random().toString(36).substr(2, 8);
        db.load(`UPDATE books.account SET password = '${newPassword}' WHERE (username = '${req.body.username}');`)

        const output = `
        <p>You have a new contact request</p>
        <h3>Make sure that no one know this except you</h3>
        <ul>  
            <li>New Password: ${newPassword}</li>
        </ul>
        <div style = "width:50%">
        <table>
        <tr>
        <td>
        <img style = "width:50%" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.15752-9/284256942_746084573411722_9065148677348780445_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IBEnOkwxyogAX-Bc0Nx&_nc_ht=scontent.fsgn2-1.fna&oh=03_AVJCH3DTBCty2Q_Cj4FDMMgqK63JweQW3iPLvJR5ZZE_1Q&oe=62CABAC3" alt="logo" class="logo-scrolled">
        </td>
        <td>
        Happy Bookstore <br>                
        International University – Vietnam National University
        Ho Chi Minh City, Vietnam <br>
        Email: tien04100@gmail.com <br>
        Facebook: https://www.facebook.com/profile.php?id=100010644854591 <br>
        Tel: 0969 141 776 (Mr.Tien)
        </td>
        </tr>
        </table>
        </div>
        `;
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secureConnection: false,
            // requireTLC: true,
            // requireTLS: true,
            auth: {
                user: 'kientrung1387@gmail.com',
                pass: 'hzrryherepsksipc'
            },
            tls:{
                rejectUnauthorized: false,
                ciphers:'SSLv3'
            }
        });
    
        // setup email data with unicode symbols
        var mailOptions = {
            from: '"Happy Bookstore" <kientrung1387@gmail.com>', // sender address
            // to: 'kientrung1388@gmail.com',
            to: req.body.email,
            // subject: 'Receive New Password', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.render("vwAccount/forgot", { 
                    layout: false,
                    title: "Forgot Password",
                    random: req.random,
                    msg:'Error... Please input again'
                });
            } else {
                res.render("vwAccount/forgot", { 
                    layout: false,
                    title: "Forgot Password",
                    random: req.random,
                    msg:'Check your email to receive new password'
                });
            }
        });

        // transporter.sendEMail = function (mailRequest) {
        //     return new Promise(function (resolve, reject) {
        //       transporter.sendMail(mailRequest, (error, info) => {
        //         if (error) {
        //             res.render("vwAccount/forgot", { 
        //                 layout: false,
        //                 title: "Forgot Password",
        //                 random: req.random,
        //                 msg:'Error... Please input again'
        //             });
        //         } else {
        //             res.render("vwAccount/forgot", { 
        //                 layout: false,
        //                 title: "Forgot Password",
        //                 random: req.random,
        //                 msg:'Check your email to receive new password'
        //             });
        //         }
        //       });
        //     });
        // }
          

        // let transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: 'gmail',
        //     requireTLS: true,
        //     auth: {
        //         user: 'kientrung1387@gmail.com',
        //         pass: 'trntrungkien2001'
        //     }
        // });
        
        // let mailOptions = {
        //     from: 'kientrung1387@gmail.com',
        //     to: 'kientrung1388@domain.com',
        //     subject: 'Test',
        //     text: 'Hello World!'
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         return console.log(error.message);
        //     }
        //     console.log('success');
        // });
    } else {
        res.render("vwAccount/forgot", { 
            layout: false,
            title: "Forgot Password",
            random: req.random,
            errorMes: "Invalid username or email !!"
        });
    }
})

// route.post("/forgot", async function (req, res) {
//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'kientrung1387@gmail.com', // generated ethereal user
//             pass: 'trntrungkien2001'  // generated ethereal password
//         },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: '"KYUN Book Store" <kientrung1387@gmail.com>', // sender address
//         to: "kientrung1388@gmail.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// })

function randomPic (req, res, next) {
    req.random = Math.floor(Math.random() * 12) + 1;
    next();
}

module.exports = route;
