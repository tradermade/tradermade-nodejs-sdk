import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function cfdList() {
  const data = await tm.getCfdList();
  console.log(data);
}

cfdList().catch(console.error);
