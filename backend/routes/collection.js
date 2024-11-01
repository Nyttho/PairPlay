const express = require("express");
const router = express.Router();
const collectionCtrl = require("../controllers/collection");

router.get("/", collectionCtrl.getAllCollections);
router.post("/", collectionCtrl.createCollection);
router.get("/:id", collectionCtrl.getCollection);
router.put("/:id", collectionCtrl.updateCollection);
router.delete("/:id", collectionCtrl.deleteCollection);
