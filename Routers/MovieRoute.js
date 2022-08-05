const express = require("express");

const router = express.Router();

const MovieController = require("../Controllers/MovieController");

router.get("/", MovieController.index);
router.get("/show/:id", MovieController.show);
router.post("/store", MovieController.store);
router.put("/update/:id", MovieController.update);
router.delete("/delete/:id", MovieController.destroy);

module.exports = router;
