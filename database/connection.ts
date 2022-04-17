import { Sequelize } from 'sequelize';
import config from './config/config.js';

const db= new Sequelize('prueba','root','tucutucu',{host:'localhost',dialect:'mysql',logging:false})
/* let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else if (process.env.NODE_ENV === 'staging') {
  sequelize = new Sequelize(config.staging);
} else if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize(config.test);
} else {
  sequelize = new Sequelize(config.development);
}
 */
/* const connection = sequelize; */

export default db;
