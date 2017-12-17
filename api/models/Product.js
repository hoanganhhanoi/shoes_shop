/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    product_name: {
      type:"string",
      required:true
    },
    description: {
      type:"string"
    },
    quantity: {
      type: "integer",
      require: true
    },
    price: {
      type: "integer",
      require: true
    },
    favorite: {
      type: "integer",
      require: true
    },
    // Add a reference to Image
    images: {
      collection: "image",
      via: "product"
    },
    // Add a reference to order_detail
    order_detail: {
      collection: "order_detail",
      via: "product"
    }
    // Add a reference to brand
    brand: {
      model: "brand"
    },
    category: {
      model: "category"
    }
    // Add a reference a size
    sizes: {
      collection: "size",
      via: "products",
      dominant: true
    },
    // Add a reference a color
    colors: {
      collection: "color",
      via: "products",
      dominant: true
    }
  }
};
