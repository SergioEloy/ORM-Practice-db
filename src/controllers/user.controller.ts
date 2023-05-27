import { Request, Response } from "express";
import User from "../models/Users";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    if (!users || users.length === 0) {
      return res.status(404).json({
        msg: "There are no users",
      });
    }
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        msg: "Bad params",
      });
    }
    const user = await User.findByPk(Number(id));
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, username } = req.body;
    const userExist = await User.findOne({
      where: { username },
    });
    if (userExist) {
      return res.status(409).json({
        msg: "Username already exist",
      });
    }
    const newUser = await User.create({
      name,
      username,
    });
    res.json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Server error",
    });
  }
};
