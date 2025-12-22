import { config } from "dotenv";




config({
  path: `.env.${process.env.NODE_ENV || "development"}.local.env`,
});





export const { PORT,  } = process.env;



