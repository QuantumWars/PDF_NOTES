// import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv"

dotenv.config({path:".env"});
// config({ path: '.env' });

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

// import type { Config } from "drizzle-kit";

// export default{
//   driver:'pg',
//   schema:'./lib/db/schema.ts',
//   dbCredentials:{
//     connectionString: process.env.DATABASE_URL!,
//   },
// }satisfies Config;