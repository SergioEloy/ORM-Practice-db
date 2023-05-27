"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const router = (0, express_1.Router)();
router.get("/", comment_controller_1.getComments);
router.get("/:id", comment_controller_1.getComment);
router.post("/", comment_controller_1.createComment);
exports.default = router;
