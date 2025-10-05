require('dotenv').config();

module.exports = {
    token: process.env.token,
    adminIds: process.env.id ? process.env.id.split(',') : []
};