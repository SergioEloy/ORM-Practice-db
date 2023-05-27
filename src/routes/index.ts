import { Router } from "express";
import users from "./users.router";
import post from "./posts.router";
import comment from "./comments.router";

const router = Router();

router.use("/users", users);
router.use("/posts", post);
router.use("/comments", comment);

export default router;
