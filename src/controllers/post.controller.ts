import { Request, Response } from "express";
import Post from "../models/Posts";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    if (!posts || posts.length === 0) {
      return res.status(404).json({
        msg: "There are no posts",
      });
    }
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const post = await Post.findByPk(Number(id));
    if (!post) {
      return res.status(404).json({
        msg: "Post not found",
      });
    }
    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { text, userId } = req.body;
    const newPost = await Post.create({
      text,
      userId,
    });
    res.json({ newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};
