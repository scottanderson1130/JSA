const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
