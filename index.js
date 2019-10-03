const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookiesMiddleware = require('universal-cookie-express');
const PORT = process.env.PORT || 5000

const app = express();
app.use(express.static(path.join(__dirname, 'react/build')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookiesMiddleware());
app.use(cookieParser());
app.set('view engine', 'ejs');


//Redirecting to router of react
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/react/build/index.html'));
});


//all post methods
app.post('/api/', (req, res) => {
  let data = req.body;
  let body = {
    success: true,
    value: data.value
  };
  res.status(200).json(body);
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`))
