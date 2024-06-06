//MIDDLEWARE must come before the routes

const logger = (req, res, next) => {
  const info = {
    url: req.url,
    method: req.method,
  };
  console.log(info);
  next();
};



// MIDDLEWARE = Passes through the middleware first before the user can access.

const auth = (req, res, next) => {
    const isLoggedIn = true;
    if(isLoggedIn) {
        next();
        return;
    }
    return res.status(403).json({success: false, message: "Unauthorized"});
}

module.exports = { logger, auth };

