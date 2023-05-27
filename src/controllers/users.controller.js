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
exports.createUser = exports.getUser = exports.getUsers = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_1.default.findAll();
        if (!users || users.length === 0) {
            return res.status(404).json({
                msg: "There are no users",
            });
        }
        res.status(200).json({
            users,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (isNaN(Number(id))) {
            return res.status(400).json({
                msg: "Bad params",
            });
        }
        const user = yield Users_1.default.findByPk(Number(id));
        if (!user) {
            return res.status(404).json({
                msg: "User not found",
            });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, username } = req.body;
        const userExist = yield Users_1.default.findOne({
            where: { username },
        });
        if (userExist) {
            return res.status(409).json({
                msg: "Username already exist",
            });
        }
        const newUser = yield Users_1.default.create({
            name,
            username,
        });
        res.json({ newUser });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Server error",
        });
    }
});
exports.createUser = createUser;
