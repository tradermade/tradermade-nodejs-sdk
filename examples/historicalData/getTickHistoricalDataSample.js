import TraderMade from "../../src/index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function tickHistoricalDataSample() {
  const data = await tm.getTickHistoricalDataSample(
    "GBPUSD",
    "2026-01-19 15:00",
    "2026-01-19 15:30",
    "csv",
  );
  console.log(data);
}

tickHistoricalDataSample().catch(console.error);
