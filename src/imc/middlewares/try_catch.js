class AsyncMiddleware {
  constructor(handler) {
    this.tryCatch(handler);
  }

  tryCatch(handler) {
    return async (req, res, next) => {
      try {
        await handler(req, res);
      } catch (err) {
        next(err);
      }
    };
  }
}

module.exports = new AsyncMiddleware();
