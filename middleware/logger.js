const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const log = {
      requestType: req.method,
      status: res.statusCode,
      response: res.statusMessage,
      body: req.body,
      duration: `${duration}ms`,
    };
    console.log(JSON.stringify(log, null, 2));
  });

  next();
};

module.exports = logger;
