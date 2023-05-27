"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("./Users"));
const Posts_1 = __importDefault(require("./Posts"));
const Comments_1 = __importDefault(require("./Comments"));
Posts_1.default.belongsTo(Users_1.default, {
    foreignKey: "userId",
    targetKey: "id",
});
Comments_1.default.belongsTo(Posts_1.default, {
    foreignKey: "postId",
    targetKey: "id",
});
Comments_1.default.belongsTo(Users_1.default, {
    foreignKey: "userId",
    targetKey: "id",
});
