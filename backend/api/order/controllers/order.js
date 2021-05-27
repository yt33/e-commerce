"use strict";

/**
 * /backend/api/order/controllers/order.js
 *
 * a set of functions called "actions"for managing 'order'
 */

const stripe = require("stripe")("sk_test_51Iunh1BjMqMEqUgoFjdA3KYW0ey4YP1ddsiH7So8qQSryaS7VejF9DztKTmzDpahoenyyWAtEpcAqvND5QW5WEuD00Fi6qemtj");

// create order record
// return object
module.exports = {
	create: async (ctx) => {
		const { amount, dishes, address, city, state, token } = JSON.parse(
			ctx.request.body
		);
		const stripeAmount = Math.floor(amount * 100);
		
		// charge on stripe
		const charge = await stripe.charges.create({
			// transform cents to dollars
			amount: stripeAmount,
			currency: "usd",
			description: `Order ${ new Date() } by ${ ctx.state.user._id }`,
			source: token,
		});

		// register the order in the database
		const order = await strapi.services.order.create({
			user: ctx.state.user.id,
			charge_id: charge.id,
			amount: stripeAmount,
			address,
			dishes,
			city,
			state,
		});

		return order;
	},
};
