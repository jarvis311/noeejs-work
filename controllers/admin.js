const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);
  product.save();
  res.redirect("/");
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId, (product) => {
//     if (!product) {
//       return res.redirect("/");
//     }
//     res.render("admin/edit-product", {
//       pageTitle: "Edit Product",
//       path: "/admin/edit-product",
//       editing: editMode,
//       formsCSS: true,
//       productCSS: true,
//       activeAddProduct: true,
//       product: product,
//     });
//   });
// };
// exports.postEditProduct = (req, res) => {
//   const prodId = req.body.productId;
//   const upodatedTitle = req.body.title;
//   const upodatedPrice = req.body.price;
//   const upodatedImageUrl = req.body.imageUrl;
//   const upodatedDescription = req.body.description;

//   const updatedProduct = new Product(
//     prodId,
//     upodatedTitle,
//     upodatedImageUrl,
//     upodatedPrice,
//     upodatedDescription
//   );
//   updatedProduct.save();
//   return res.redirect("/admin/products");
// };

// exports.postDeleteProduct = (req, res) => {
//   const postId = req.body.productId
//   Product.deleteById(postId)
//    res.redirect('/products')
// }

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "Admin Products",
//       path: "/admin/products",
//     });
//   });
// };

