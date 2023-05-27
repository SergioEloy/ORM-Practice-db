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
exports.createComment = exports.getComment = exports.getComments = void 0;
const Comments_1 = __importDefault(require("../models/Comments"));
const Users_1 = __importDefault(require("../models/Users"));
const Posts_1 = __importDefault(require("../models/Posts"));
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield Comments_1.default.findAll();
        if (!comments || comments.length === 0) {
            return res.status(404).json({
                msg: "There are no comments",
            });
        }
        res.status(200).json({
            comments,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getComments = getComments;
const getComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (isNaN(Number(id))) {
            return res.status(400).json({
                msg: "Bad params",
            });
        }
        const comment = yield Comments_1.default.findByPk(Number(id));
        if (!comment) {
            return res.status(404).json({
                msg: "Comment not found",
            });
        }
        res.status(200).json({ comment });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getComment = getComment;
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId, postId } = req.body;
        if (!userId || !postId || !text) {
            return res.status(400).json({
                msg: "Please, complete your info",
            });
        }
        const userExist = yield Users_1.default.findByPk(userId);
        if (!userExist) {
            return res.status(400).json({
                msg: "User not found",
            });
        }
        const postExist = yield Posts_1.default.findByPk(postId);
        if (!postExist) {
            return res.status(400).json({
                msg: "Post doesn't exist",
            });
        }
        const newComment = yield Comments_1.default.create({
            text,
            userId,
            postId,
        });
        res.json({ newComment });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.createComment = createComment;
