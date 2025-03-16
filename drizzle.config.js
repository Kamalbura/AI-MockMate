/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_7acIkVOsh2XK@ep-wandering-poetry-a5dwmg27-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }
};
