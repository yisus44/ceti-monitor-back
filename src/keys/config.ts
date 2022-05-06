const PORT = process.env.PORT || 3000;
const databaseConnectionString =
  process.env.DATABASE_CONNECTION || "mongodb://localhost:27017/test";
export { PORT, databaseConnectionString };
