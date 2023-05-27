import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../database/dbconection";

export class Comment extends Model<InferCreationAttributes<Comment>> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
  declare postId: number;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

export default Comment;
