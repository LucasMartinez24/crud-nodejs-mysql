import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "mysqldb",
  user: "lucas",
  password: "1234",
  port: 3306,
  database: "customersdb",
});
