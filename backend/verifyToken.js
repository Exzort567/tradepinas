const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization; // Extract token from headers

    if (!token) {
        return res.status(401).json("You are not authenticated!");
    }

    jwt.verify(token, process.env.SECRET, async (err, data) => {
        if (err) {
            return res.status(403).json("Token is not valid!");
        }
        req.userId = data.id;
        console.log("passed");
        next();
    });
};

module.exports = verifyToken;
