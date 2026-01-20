import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function marketOpenTiming() {
  const data = await tm.getMarketOpenTiming();
  console.log(JSON.stringify(data, null, 2));
}

marketOpenTiming().catch(console.error);
