const jwt = require('jsonwebtoken');

const jwtKey = 'my_secret_key';
const jwtExpirySeconds = 300;

const users = {
  user1: 'password1',
  user2: 'password2'
};
//checks if there is an existing token and whether is valid

// first middleware
const welcome = (req, res, next) => {
  // We can obtain the session token from the requests cookies, which come with every request

  const token = req.cookies.token || req.header('x-auth-token');

  // if the cookie is not set, return an unauthorized error
  if (!token) {
    return res
      .status(401)
      .send({ message: 'Token not found' })
      .end();
  }

  var payload;
  try {
    // Parse the JWT string and store the result in `payload`.
    // Note that we are passing the key in this method as well. This method will throw an error
    // if the token is invalid (if it has expired according to the expiry time we set on sign in),
    // or if the signature does not match
    payload = jwt.verify(token, jwtKey); // verification of the send token

    req.user = payload;
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res
      .status(400)
      .send('An error occured while handling the send token')
      .end();
  }
};

// the second middleware increases the expiry time for the token

const refresh = (req, res, next) => {
  // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
  const token = req.user;

  console.log(`this is the token inthe reffresh middlware ${token}`);

  if (!token) {
    return res
      .status(401)
      .send('NO token- cannot increase the expiry time')
      .end();
  }

  var payload;
  try {
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  // (END) The code uptil this point is the same as the first part of the `welcome` route

  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end();
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  });

  // Set the new token as the users `token` cookie
  //   res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 });
  req.payload = newToken;
  next();
};

module.exports = {
  //   signIn,
  welcome,
  refresh
};
