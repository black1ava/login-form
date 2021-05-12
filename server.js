const express = require('express');
const controllers = require('./controllers/controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

controllers(app);

app.listen(PORT, function(){
  console.log(`Server is running on port ${ PORT }`);
});