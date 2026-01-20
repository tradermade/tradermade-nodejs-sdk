import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function liveCurrencyList() {
  const data = await tm.getLiveCurrencyList();
  console.log(data);
}

liveCurrencyList().catch(console.error);
