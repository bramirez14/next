import { DataTypes,Model } from 'sequelize';
import db from '../connection';


const articles = db.define('articles', {

    pantalon:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    buzo: { type: DataTypes.STRING,
      allowNull: false,
    }
    
  })
  export default articles;


