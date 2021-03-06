const express = require('express');
const app = express();

const flash = require('express-flash');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');
const logger = require('./src/logger/logger');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 3000000}
}));
app.use(routes);

app.listen(3000, (req, res) => {
    logger.info('Servidor inicializado');
})