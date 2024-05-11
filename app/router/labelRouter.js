const express = require("express");
const { labelController } = require("../controllers/index");
const router = express.Router();
const security = require("../service/security");
const multer = require('multer');
const upload = multer();
const authenticateJWT = require("../service/authenticateJWT");

// All routes are prefixed with /label

router.get("/", labelController.getAllLabels);
router.get("/:id", labelController.getLabel);
router.post("/addLabel", authenticateJWT,upload.none(), security.checkAdmin, labelController.addLabel);
router.post(
  "/addLabelToWork/:workId",authenticateJWT,
  security.checkAdmin,
  labelController.addLabelToWork
);
router.patch("/:id",authenticateJWT, security.checkAdmin, labelController.modifyLabel);
router.delete("/:id",authenticateJWT,security.checkAdmin, labelController.deleteLabel);

module.exports = router;
