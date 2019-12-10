const express = require('express');
// config = require('.server/configure');
const app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', `${__dirname}/Views`);
// app = config(app);
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server up: http://localhost:${app.get('port')}`);
});
