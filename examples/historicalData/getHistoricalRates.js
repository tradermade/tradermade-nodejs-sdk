import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function historicalRates() {
  const data = await tm.getHistoricalRates("2021-04-22", "EURUSD", "UK100");
  console.log(data);
}

historicalRates().catch(console.error);
