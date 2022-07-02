const newsRouter = require('./news');
const productsRouter = require('./products');
const adminRouter = require('./admin');

function route(app){
  app.get('/', (req, res) => {
    res.render('home');
  });
  
  app.use('/news', newsRouter)

  app.use('/products', productsRouter)

  app.use('/admin', adminRouter)

  app.get('/search', (req, res) => {
    res.render('search');
  });
  
  app.post('/search', (req, res) => {
    console.log("query=====" , req);
    //res.send('');
  });
  
}

module.exports = route;
