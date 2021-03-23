import passport from "passport";
import passportJWT from "passport-jwt";
import { to } from "await-to-js";

import { getUserById } from "../../service/user.service";
import { signToken } from "../utils";

const JWTStrategy = passportJWT.Strategy;
const strategy = () => {
  const strategyOptions = {
    jwtFromRequest: (req) => req.cookies.jwt,
    secretOrKey: process.env.JWT_SECRET,
    passReqToCallback: true,
  };

  const verifyCallback = async (req, jwtPayload, cb) => {
    const [err, user] = await to(getUserById(jwtPayload.data._id));

    if (err) {
      return cb(err);
    }
    req.user = user;
    return cb(null, user);
  };

  passport.use(new JWTStrategy(strategyOptions, verifyCallback));
};

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    // TODO
  });
};

export { strategy, login };
