import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function openMarketStatus() {
  const data = await tm.getOpenMarketStatus();
  console.log(data);
}

openMarketStatus().catch(console.error);
