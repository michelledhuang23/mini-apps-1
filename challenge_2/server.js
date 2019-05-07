const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {
  res.status(200).send();
});

app.post('/', (req, res) => {
  res.status(201).send();
  let csvData = '';
  let tempRow = [];
  let headers = [];
  let parsedData = JSON.parse(req.body.json);
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
  console.log(csvData);
});
