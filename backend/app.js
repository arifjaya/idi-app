const express = require('express');
const bodyParser = require('body-parser');
const { loadModules } = require('./modulesLoader');

const app = express();
app.use(bodyParser.json());

// Dynamic load modules
loadModules(app);

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000');
});
