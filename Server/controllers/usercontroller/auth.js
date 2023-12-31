const { checkPwd } = require('../../helpers/bcrypt');
const { createToken } = require('../../helpers/jwt');
const PlayerModel = require('../../models/player');

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw new Error('email_required');
      }

      if (!password) {
        throw new Error('password_required');
      }

      const checkPlayer = await PlayerModel.findOne({ email });

      if (!checkPlayer) {
        throw new Error('User not found');
      }

      if (!checkPwd(password, checkPlayer.password)) {
        throw new Error('Email/Password doesnt match');
      }

      const payload = {
        _id: checkPlayer._id,
        fullName: checkPlayer.fullName,
        email: checkPlayer.email,
        phoneNumber: checkPlayer.phoneNumber,
        imageUrl: checkPlayer.imageUrl,
        favoritGame: checkPlayer.favoritGame,
      };

      const token = createToken(payload);

      res.status(200).json({
        statusCode: 200,
        message: `Welcome ${checkPlayer.fullName}`,
        access_token: token,
        player: payload,
      });
    } catch (error) {
      next(error);
    }
  },

  register: async (req, res, next) => {
    try {
      const payload = req.body;

      const createPlayer = await PlayerModel.create({
        ...payload,
        imageUrl: req.file?.path,
      });

      const tokenPayload = {
        _id: createPlayer._id,
        fullName: createPlayer.fullName,
        email: createPlayer.email,
        phoneNumber: createPlayer.phoneNumber,
        imageUrl: createPlayer.imageUrl,
        favoritGame: createPlayer.favoritGame,
      };

      const token = createToken(tokenPayload);

      res.status(201).json({
        statusCode: 201,
        message: `Account ${createPlayer.fullName} created successfully`,
        access_token: token,
        player: tokenPayload,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
