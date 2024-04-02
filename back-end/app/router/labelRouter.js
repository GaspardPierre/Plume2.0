const express = require("express");
const { labelController } = require("../controllers/index");
const router = express.Router();
const security = require("../service/security");
const multer = require('multer');
const upload = multer();

// All routes are prefixed with /label

router.get("/", labelController.getAllLabels);

router.post("/addLabel", upload.none(), security.checkAdmin, labelController.addLabel);
router.get("/:id", labelController.getLabel);
router.post(
  "/addLabelToWork/:workId",
  security.checkAdmin,
  labelController.addLabelToWork
);
router.patch("/:id", security.checkAdmin, labelController.modifyLabel);
router.delete("/:id", security.checkAdmin, labelController.deleteLabel);

module.exports = router;
