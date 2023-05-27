import User from "./Users";
import Post from "./Posts";
import Comment from "./Comments";

Post.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});

Comment.belongsTo(Post, {
  foreignKey: "postId",
  targetKey: "id",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});
