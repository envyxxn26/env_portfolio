const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio is running at http://localhost:${port}`);
});
