const userModel = require('../models/user');
exports.getusers = async (req, res, next) => {
  try {
	const page = req.query.page || 1;
	const perPage = req.query.perPage || 10;
	const skip = page-1 * perPage;
	

	const users = await userModel.find().skip(skip).limit(perPage);

  	res.json(users);
  } catch (err) {
  	if (!err.statusCode) {
  		err.statusCode = 500;
  	}
  	next(err);
  }
}