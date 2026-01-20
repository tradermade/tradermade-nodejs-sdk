import TraderMade from "tradermade-node-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function currencyConversion() {
  const data = await tm.getCurrencyConversion("EUR", "GBP", "1000");
  console.log(data);
}

currencyConversion().catch(console.error);
