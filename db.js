require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING
});

// Create new row
async function createNewRow() {
  try {
    const res = await pool.query('INSERT into PortfolioSite (id) values (default) RETURNING *');
    return res.rows[0].id;
  } catch (error) {
    console.error(error);
  }
}

// Update a specific row with click data
async function addClick(viewId, clickNum, clickStr) {
  try {
    const str = `UPDATE PortfolioSite SET click_${clickNum}=($1) WHERE id=($2)`;
    const vals = [clickStr, viewId];
    pool.query(str, vals);
  } catch (error) { 
    console.error(error);
  }
}

module.exports = {
  createNewRow,
  addClick
}