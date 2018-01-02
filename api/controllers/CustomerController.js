/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createCustomer: function(req, res, next) {
		debugger;
		CustomerService.createCustomer(req.body, function(error, data) {
			if(error) {
				sails.log(error);
				return res.serverError(data);
			}
			res.created(data);
		});
	},
	getCustomers: function(req, res, next) {

	},
	editCustomer: function(req, res, next) {

	},
	deleteCustomer: function(req, res, next) {

	}
};
