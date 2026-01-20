import TraderMade from "tradermade-node-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function dataAsPandasDataFrame() {
  const data = await tm.getDataAsPandasDataFrame(
    "EURUSD",
    "2025-04-01",
    "2025-05-09",
    "index",
    "close",
  );
  console.log(data);
}

dataAsPandasDataFrame().catch(console.error);
