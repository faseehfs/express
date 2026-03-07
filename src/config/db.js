const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Database connection successful");
  } catch (err) {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  }
})();

module.exports = pool;
