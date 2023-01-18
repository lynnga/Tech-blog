const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "User_id",
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: "Post_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "User_id",
  onDelete: "Cascade"
});

module.exports = {
  User,
  Comment,
  Post,
};
