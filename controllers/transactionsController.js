// @desc    Get all transactions
// @route   Get /api/v1/tranactions
// @access  Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

// @desc    Add transaction
// @route   POST /api/v1/tranactions
// @access  Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
}

// @desc    Delete transaction
// @route   DELETE /api/v1/tranactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
}