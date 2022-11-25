const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: (newUser, options) => {
            const {password} = newUser;
            const hash = bcrypt.hashSync(password, 8);
            newUser.password = hash;
        }
    }
})

module.exports = Users;