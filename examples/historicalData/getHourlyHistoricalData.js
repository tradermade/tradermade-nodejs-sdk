import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function hourlyHistoricalData() {
  const data = await tm.getHourlyHistoricalData("2025-05-09-14:00", "GBPUSD");
  console.log(data);
}

hourlyHistoricalData().catch(console.error);
