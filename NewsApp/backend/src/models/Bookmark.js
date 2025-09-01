import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Bookmark = sequelize.define('Bookmark', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  url: DataTypes.STRING,
  urlToImage: DataTypes.STRING,
});

User.hasMany(Bookmark, { onDelete: 'CASCADE' });
Bookmark.belongsTo(User);

export default Bookmark;
