import { Router } from "express";
import {
  createComment,
  getComment,
  getComments,
} from "../controllers/comment.controller";

const router = Router();

router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", createComment);

export default router;
