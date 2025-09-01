import sequelize from '../config/db.js';
import User from './User.js';
import Bookmark from './Bookmark.js';

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // dev: alter, prod: {force: false}
    console.log('✅ Database connected');
  } catch (err) {
    console.error('❌ DB connection failed:', err.message);
  }
};

export { connectDB, User, Bookmark };
