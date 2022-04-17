import { DataTypes } from "sequelize";
import db from "../connection";

const users = db.define("users", {
    idUser: {
         type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
      },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { type: DataTypes.STRING, allowNull: false },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: { type: DataTypes.STRING, allowNull: false },
});
export default users;
