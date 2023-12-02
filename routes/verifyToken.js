const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SEC);
      req.user = user;
      next();
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json("Token is not valid!");
    }
    return res.status(500).json("Internal Server Error");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
