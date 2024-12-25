// server/src/middleware/validation.middleware.js
module.exports = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: 'Validation error',
          details: error.details,
        });
      }
      next();
    };
  };