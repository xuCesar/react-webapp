const express = require('express');
const router = express.Router();

// const dashboardRoutes = require('./dashboard');
const frontedRoutes = require('./frontend');

// mount all routes on /api path frontend
// router.use('/dashboard', dashboardRoutes);
router.use('/frontend', frontedRoutes);

module.exports = router;