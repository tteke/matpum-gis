import { Sequelize } from 'sequelize';
import buildingInitializer from './models/building';

const db = {};

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/db.sqlite'
});

db.Building = buildingInitializer(sequelize);

db.Building.associate(db);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync();

export default (() => db)();

