const express = require("express");
const router = express.Router();
const { dataController } = require("../controllers");
const { dataValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(dataController.getDatas);
router.route("/:nama").get(dataValidation.getDatabyName, dataController.getDatabyName);
router.route("/:email/:telepon").get(dataValidation.getDatabyEmailTelephone, dataController.getDatabyEmailTelephone);
router.route("/patch").patch(dataValidation.patchDatabyName, dataController.patchDatabyName);
router.route("/delete/:email").delete(dataValidation.deleteDatabyEmail, dataController.deleteDatabyEmail);
router.route("/insert").post(dataValidation.addData, dataController.addData);
router.route("/bulkinsert").post(dataValidation.addBulkData, dataController.addBulkData);

module.exports = router;