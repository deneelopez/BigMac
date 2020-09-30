const express = require('express');
const path = require('path');
const IP = require('../IP');
const PORT = '8008';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.post('/', (req, res) => {

  IP.getUserCountry(req.body.userIP, (err, result) => {
    if (err) {
      console.error('app.post get user error', err);
      res.sendStatus(404);
    } else {
      res.status(200).send(result);
    }
  })
});


app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
