const express = require('express');
//import in express library

const app = express();

app.get('/greeting', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
//set port to either Heroku provided, or 5000
app.listen(PORT);
