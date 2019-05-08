const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client'));
app.use('/public', express.static('./public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {
  res.status(200).send();
});

app.post('/', (req, res) => {
  let csvData = '';
  let tempRow = [];
  let headers = [];
  let parsedData = JSON.parse(req.body);
  for (const key in parsedData) {
    if (key !== 'children') {
      headers.push(key);
      tempRow.push(parsedData[key]);
    }
  }
  csvData += headers.join(',') + '\n';
  csvData += tempRow.join(',') + '\n';
  tempRow = [];
  let helper = function(arr) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        for (let value of headers) {
          if (arr[i].hasOwnProperty(value)) {
            tempRow.push(arr[i][value]);
          }
        }
        csvData += tempRow.join(',') + '\n';
        tempRow = [];
        helper(arr[i].children);
      }
    }
  };
  helper(parsedData.children);

  fs.writeFile('./public/download.csv',csvData, (err) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(201).send('http://localhost:3000/public/download.csv');
    }
  });

  // res.setHeader('Content-disposition', 'attachment; filename=default.csv');
  // res.set('Content-type', 'text/csv');
  // res.status(200).send(csvData);
});

