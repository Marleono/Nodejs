const path = require('path');
const express = require('express')

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop');


const errorController = require('./controllers/404.js');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user')


const bodyParser = require('body-parser');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    User.findById("632458436881270089e1dc00")
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next()
        })
        .catch(err => {
            console.log(err)
        })
})

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.getError);

mongoConnect(() => {
    app.listen(3000);
})
