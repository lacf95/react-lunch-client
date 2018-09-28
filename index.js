const Express = require('express');
const Compression = require('compression');
const BodyParser = require('body-parser');
const Logger = require('morgan');
const Helmet = require('helmet');

const app = Express();

const port = process.env.PORT || 3000;

app.use(Helmet());
app.use(Compression());
app.use(Logger('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Express.static(`${__dirname}/dist`));

app.get('/', (req, res) => res.sendFile('index.html'));
app.get('/sign-in', (req, res) => res.sendFile('index.html', { root: `${__dirname}/dist` }));
app.get('/menu-calendar', (req, res) => res.sendFile('index.html', { root: `${__dirname}/dist` }));

app.listen(port);
