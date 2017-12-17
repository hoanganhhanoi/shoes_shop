/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date: {
      type: "datetime",
      require: true
    },
    quantity: {
      type: "integer",
      require: true
    },
    total: {
      type: "integer",
      require: true
    },
    status: {
      model: 'status'
    },
    customer: {
      model: 'customer'
    },
    order_detail: {
      collection: "order_detail",
      via: "order"
    }
  }
};
