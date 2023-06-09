const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const dotenv = require('dotenv'),
      path   = require('path')
dotenv.config({path: path.join(__dirname, '../config./config.env')})


// Protect routes
exports.protect = async (req, res, next) => {
  console.log("req.cookies", req.cookies)
  const { token } = req.cookies

    if (!token) {
        return next(new ErrorResponse('Login first to access this resource.', 401))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log("request", token)
    req.user = await User.findById(decoded.id);
    
    next()

};

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
