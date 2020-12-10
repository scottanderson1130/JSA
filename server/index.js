const express = require('express');
const path = require('path');

const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.listen(1130, () => {
  console.log(`listening on http://localhost:1130`);
});
