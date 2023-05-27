"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPost = exports.getPosts = void 0;
const Posts_1 = __importDefault(require("../models/Posts"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Posts_1.default.findAll();
        if (!posts || posts.length === 0) {
            return res.status(404).json({
                msg: "There are no posts",
            });
        }
        res.status(200).json({
            posts,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getPosts = getPosts;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (isNaN(Number(id))) {
            return res.status(400).json({
                msg: "Bad params",
            });
        }
        const post = yield Posts_1.default.findByPk(Number(id));
        if (!post) {
            return res.status(404).json({
                msg: "Post not found",
            });
        }
        res.status(200).json({ post });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId } = req.body;
        const newPost = yield Posts_1.default.create({
            text,
            userId,
        });
        res.json({ newPost });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.createPost = createPost;
