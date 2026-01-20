import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv"

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function tickHistoricalData() {
  const data = await tm.getTickHistoricalData(
    "EURUSD",
    "2026-01-12 15:00",
    "2026-01-12 15:01",
    "json"
  );
  console.log(data);
}

tickHistoricalData().catch(console.error);
