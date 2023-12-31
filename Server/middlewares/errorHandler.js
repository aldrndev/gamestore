const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (error.message === 'game_not_found') {
    statusCode = 404;
    message = 'Game not found in database';
  }

  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(error.errors)[0].message;
  }

  if (
    error.message === 'email_required' ||
    error.message === 'password_required'
  ) {
    statusCode = 401;
    message = 'Email/Password is required';
  }

  if (error.message === 'User not found') {
    statusCode = 404;
    message = 'Please check your input, user not found';
  }

  if (error.message === 'Email/Password doesnt match') {
    statusCode = 401;
    message =
      'Please check your email/password, doesnt match with your account';
  }

  res.status(statusCode).json({
    statusCode,
    message,
  });
};

module.exports = errorHandler;
