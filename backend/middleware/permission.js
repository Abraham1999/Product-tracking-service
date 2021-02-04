// middleware for doing role-based permissions
var permit = function(...allowed) {
	const isAllowed = (role) => allowed.indexOf(role) > -1;

	// return a middleware
	return (request, response, next) => {
		if (request.body.role && isAllowed(request.body.role)) next();
		else {
			// role is allowed, so continue on the next middleware
			response.status(403).json({ message: 'Forbidden' + request.user.role + ' not allowed' }); // user is forbidden
		}
	};
};

module.exports = permit;
