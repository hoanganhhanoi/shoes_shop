module.exports = {
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
