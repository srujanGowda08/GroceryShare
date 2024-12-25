// server/src/middleware/error.middleware.js
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Server Error",
    error: err,
  });
};
