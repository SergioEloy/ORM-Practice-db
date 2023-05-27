"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_router_1 = __importDefault(require("./users.router"));
const posts_router_1 = __importDefault(require("./posts.router"));
const comments_router_1 = __importDefault(require("./comments.router"));
const router = (0, express_1.Router)();
router.use("/users", users_router_1.default);
router.use("/posts", posts_router_1.default);
router.use("/comments", comments_router_1.default);
exports.default = router;
