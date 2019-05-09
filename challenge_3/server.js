const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {User, Address, Payment} = require('./db/sequelize');
const port = 3000;

// app.use(bodyParser.json());
const jsonParser = bodyParser.json();
app.use(express.static('./public'));

app.post('/user', jsonParser, (req, res) => {
  console.log(req.body);
  User.create({ 
    name: req.body.name, 
    email: req.body.email, 
    password: req.body.password
  })
  .then(entry => {
    res.json({entryId: entry.id});
    // res.sendStatus(201);
  })
  .catch(err => {
    res.status(500).send();
  });
});

app.post('/address', (req, res) => {
  Address.create({ 
    address1: "test", 
    address2: "test", 
    city: "text",
    state: "test",
    zipCode: "test",
    phoneNumber: "test",
    userId: "test",
  })
  .then(() => {
    res.status(201).send();
  })
  .catch(() => {
    res.status(500).send();
  });
});

app.post('/payment', (req, res) => {
  Payment.create({ 
    creditCard: "test", 
    expirationDate: "test", 
    cvv: "text",
    zipCode: "test",
    userId: "test"
  })
  .then(() => {
    res.status(201).send();
  })
  .catch(() => {
    res.status(500).send();
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));



