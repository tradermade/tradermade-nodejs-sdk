import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function timeSeriesData() {
  const tm = new TraderMade();
  const data = await tm.getTimeSeriesData(
    "EURUSD",
    "2026-01-08",
    "2026-01-10",
    "daily",
    "1",
    "index",
  );
  console.log(data);
}

timeSeriesData().catch(console.error);

