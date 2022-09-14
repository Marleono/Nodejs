const path = require('path');
const express = require('express')

// const adminRoutes = require('./routes/admin.js')
// const shopRoutes = require('./routes/shop');


const errorController = require('./controllers/404.js');
const mongoConnect = require('./util/database')


const bodyParser = require('body-parser');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then(user => {
    //         req.user = user;
    //         next()
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
})

// app.use('/admin', adminRoutes);

// app.use(shopRoutes);

app.use(errorController.getError);

mongoConnect(client => {
    console.log(client)
    app.listen(3000);
})
