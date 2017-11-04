const express = require('express');
const app = express();
const path = require('path');
const helperData = require('./helperData');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.get('/json', urlLogger, timeLogger, (request, response) => {
  response.status(200).json(helperData);
});

// app.get('/json', urlLogger, (request, response) => {
//   response.status(200).json({"name": "Robbie"});
// });

app.get('/sunsets', (request, response) => {
  response.status(200).json({"sunsets": 'https://i.imgur.com/SqhXSFG.jpg'})
})

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (request, response) => {
//   response.send('hello world');
// });

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

// app.get('/json', (request, response) => {
//   response.status(200).json({"name": "Robbie"});
// });

app.use(urlLogger, timeLogger);
