import {
  Model,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../database/dbconection";

export class Post extends Model<InferCreationAttributes<Post>> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare userId: number;
}

Post.init(
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
  },
  {
    sequelize,
  }
);

export default Post;
