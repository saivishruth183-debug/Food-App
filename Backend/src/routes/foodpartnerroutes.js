const express = require('express');
const foodPartnerController = require("../controllers/foodpartnercontroller.js");
const authMiddleware = require("../middlewares/authmiddleware.js");

const router = express.Router();


/* /api/food-partner/:id */
router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;