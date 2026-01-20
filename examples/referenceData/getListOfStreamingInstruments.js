import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function streamingCurrencyList() {
  const data = await tm.getStreamingCurrencyList();
  console.log(data);
}

streamingCurrencyList().catch(console.error);
