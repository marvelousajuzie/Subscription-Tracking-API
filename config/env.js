import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development";

const envFilePath = path.resolve(__dirname, `.env.${env}.local.env`);


config({ path: envFilePath });


export const { PORT,
     NODE_ENV,
      DB_URL,
      JWT_SECRET,
      JWT_EXPIRES_IN,
      ARCJET_ENV,
      ARCJET_KEY
       } = process.env;



