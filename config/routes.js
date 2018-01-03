/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * routes api customers                                                     *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/customers': 'CustomerController.getCustomers',
  'post /api/v1/customers': 'CustomerController.createCustomer',
  'put /api/v1/customers': 'CustomerController.editCustomer',
  'delete /api/v1/customers/:customer_id': 'CustomerController.deleteCustomer',
  'get /api/v1/customers/:customer_id': 'CustomerController.getCustomer',

  /***************************************************************************
  *                                                                          *
  * routes api brands                                                        *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/brands': 'BrandController.getBrands',
  'post /api/v1/brands': 'BrandController.createBrand',
  'put /api/v1/brands': 'BrandController.editBrand',
  'delete /api/v1/brands/:brand_id': 'BrandController.deleteBrand',
  'get /api/v1/brands/:brand_id': 'BrandController.getBrand'

  /***************************************************************************
  *                                                                          *
  * routes api colors                                                        *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/colors': 'ColorController.getColors',
  'post /api/v1/colors': 'ColorController.createColor',
  'put /api/v1/colors': 'ColorController.editColor',
  'delete /api/v1/colors/:color_id': 'ColorController.deleteColor',
  'get /api/v1/colors/:color_id': 'ColorController.getColor'

  /***************************************************************************
  *                                                                          *
  * routes api sizes                                                         *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/sizes': 'SizeController.getSizes',
  'post /api/v1/sizes': 'SizeController.createSize',
  'put /api/v1/sizes': 'SizeController.editSize',
  'delete /api/v1/sizes/:size_id': 'SizeController.deleteSize',
  'get /api/v1/sizes/:size_id': 'SizeController.getSize'

  /***************************************************************************
  *                                                                          *
  * routes api sales                                                         *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/sales': 'SaleController.getSales',
  'post /api/v1/sales': 'SaleController.createSale',
  'put /api/v1/sales': 'SaleController.editSale',
  'delete /api/v1/sales/:sale_id': 'SaleController.deleteSale',
  'get /api/v1/sales/:sale_id': 'SaleController.getSale'

  /***************************************************************************
  *                                                                          *
  * routes api categories                                                    *
  *                                                                          *
  ***************************************************************************/

  'get /api/v1/categories': 'CategoryController.getCategories',
  'post /api/v1/categories': 'CategoryController.createCategory',
  'put /api/v1/categories': 'CategoryController.editCategory',
  'delete /api/v1/categories/:cate_id': 'CategoryController.deleteCategory',
  'get /api/v1/categories/:cate_id': 'CategoryController.getCategory'

};
