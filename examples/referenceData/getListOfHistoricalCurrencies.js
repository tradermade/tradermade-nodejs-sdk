import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function historicalCurrencyList() {
  const data = await tm.getHistoricalCurrencyList();
  console.log(data);
}

historicalCurrencyList().catch(console.error);
