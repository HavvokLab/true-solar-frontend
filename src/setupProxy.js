module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader("app", "react");
    next();
  });
};
