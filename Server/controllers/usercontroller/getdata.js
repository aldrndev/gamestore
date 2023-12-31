const VoucherModel = require('../../models/voucher');

module.exports = {
  featuredGame: async (req, res, next) => {
    try {
      const getFeaturedGame = await VoucherModel.find();

      if (getFeaturedGame.length === 0) {
        throw new Error('game_not_found');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'Success fetch all game from database',
        data: getFeaturedGame,
      });
    } catch (error) {
      next(error);
    }
  },
};
