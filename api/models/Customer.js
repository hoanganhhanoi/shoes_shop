/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    customer_name: {
      type: "string",
      require: true,
      unique: true
    },
    email: {
      type: "string",
      email: true,
      unique: true
    },
    password: {
      type: "string",
      require: true
    },
    address: {
      type: "string",
      require: true
    },
    phone: {
      type: "string",
      require: true
    },
    orders: {
      collection: "order",
      via: "customer"
    }
  }
};
