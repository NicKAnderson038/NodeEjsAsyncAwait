const Product = require('../models/product')

const getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
  }

const getProducts = (req, res, next) => {
    Product.fetchAll().then(products => {
      const json = JSON.parse(products.toString('utf8'))
      console.log(json)
      res.render('shop', {
      prods: json,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: json.length > 0,
      activeShop: true,
      productCSS: true
      });
    }) 
    // const products = Product.fetchAll()
    // console.log('TEST: ', products)
    // res.render('shop', {
    //   prods: products,
    //   pageTitle: 'Shop',
    //   path: '/',
    //   hasProducts: products.length > 0,
    //   activeShop: true,
    //   productCSS: true
    // });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts
}