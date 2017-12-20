/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {
		CustomerService.createCustomer(req.body, function(error, data) {
			if(error) {
				sails.log(error);
				return res.serverError(data);
			}
			res.created(data);
		});
	}
};
