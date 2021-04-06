'use strict';

const express = require('express');

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This is kubernetes based Nodejs Application');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
