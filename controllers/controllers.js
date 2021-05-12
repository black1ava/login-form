const bodyparser = require('body-parser');

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  const urlencodedParser = bodyparser.urlencoded({ extended: false });

  app.post('/info', urlencodedParser, function(req, res){
    // console.log(req.body);
    const form = req.body;
    res.render('info', { form });
  });
}