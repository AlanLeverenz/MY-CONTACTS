const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private (getting a user that is logged in)
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public (start process with public requester)
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
