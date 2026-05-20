const db = require('../config/db');

const getAllProducts = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM Product');
        return rows;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllProducts };