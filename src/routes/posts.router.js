"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = (0, express_1.Router)();
router.get("/", post_controller_1.getPosts);
router.get("/:id", post_controller_1.getPost);
router.post("/", post_controller_1.createPost);
exports.default = router;
