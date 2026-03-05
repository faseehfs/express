function restrict(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = restrict;
