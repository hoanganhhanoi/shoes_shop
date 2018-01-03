/**
 * CustomerService
 *
 * @description :: Server-side services for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */
module.exports = {
  getCustomer: function(customer_id, done) {
    Customer.find()
    .where({id: customer_id})
    .then(function(customer) {
      return done(false, customer);
    })
    .catch(function(error) {
      return done(true, error);
    });
  },
  getCustomers: function(done) {
    Customer.find()
    .then(function(customers) {
      return done(false, customers);
    })
    .catch(function(error) {
      return done(true, error);
    });
  },
  createCustomer: function(customer, done) {
    Customer.create(customer).exec(function(error, data) {
      if(error) {
        return done(true, error);
      }
      sails.log('An account has been created with id ' + data.id + ', email: ' + data.email);
      return done(false, data);
    });
  }
};
