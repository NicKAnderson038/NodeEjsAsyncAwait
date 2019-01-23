const get404 = (req, res, next) => {
    res.status(404).render('404', {
      pageTitle: 'Page Not Found',
      path: '/',
      activeShop: true,
      productCSS: true
    });
}

module.exports = { 
  get404 
}