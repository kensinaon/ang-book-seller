const express = require('express');
const app = express();

const root = __dirname + "/dist/ang-book-seller";

app.use(express.static(root));

app.get('*', (rq, res) => {
  res.sendFile('index.html', {root: root})
});

app.listen(process.env.PORT || 8081);
