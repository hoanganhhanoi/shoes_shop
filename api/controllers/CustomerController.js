/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createCustomer: function(req, res, next) {
		CustomerService.createCustomer(req.body, function(error, data) {
			if(error) {
				sails.log(data);
				return res.serverError({
					status: "error",
					code: 500,
					message: [data],
				  result: ""
				});
			}
			res.created({
				status: "ok",
				code: 201,
				message: [],
				result: data
			});
		});
	},
	getCustomer: function(req, res, next) {
		var customer_id = req.params.customer_id;
		if(!customer_id) {
			return res.badRequest({
				status: "error",
				code: 400,
				message: "Please enter customer id",
				result: ""
			});
		}
		CustomerService.getCustomer(customer_id, function(error, data) {
			if(error) {
				sails.log(data);
				return res.serverError({
					status: "error",
					code: 500,
					message: [data],
				  result: ""
				});
			}
			if(data.length === 0) {
				return res.notFound({
					status: "error",
					code: 404,
					message: ['Could not find customer, sorry.'],
					result: ""
				});
			}
			res.json({
				status: "ok",
				code: 200,
				message: [],
				result: data
			});
		});
	},
	getCustomers: function(req, res, next) {
		CustomerService.getCustomers(function(error, data) {
			if(error) {
				sails.log(data);
				return res.serverError({
					status: "error",
					code: 500,
					message: [data],
				  result: ""
				});
			}
			res.json({
				status: "ok",
				code: 200,
				message: [],
				result: data
			});
		});
	},
	editCustomer: function(req, res, next) {

	},
	deleteCustomer: function(req, res, next) {

	}
};
