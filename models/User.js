const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const bcrypt = require("bcrypt");

class User extends Model {
  verifyPass(pass) {
    return bcrypt.compareSync(pass, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;
      },
      beforeUpdate: async (userDataUpdated) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;
      },
    },

    sequelize,
    timeStamps: false,
    freezeTablesName: true,
    underscored:true,
    modelName: "User"
  }
);

module.exports = User;
