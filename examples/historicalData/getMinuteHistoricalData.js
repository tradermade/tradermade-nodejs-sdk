import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function minuteHistoricalData() {
  const data = await tm.getMinuteHistoricalData("2019-10-10-13:24", "EURUSD");
  console.log(data);
}

minuteHistoricalData().catch(console.error);
