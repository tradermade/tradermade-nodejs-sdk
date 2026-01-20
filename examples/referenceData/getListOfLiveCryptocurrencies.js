import TraderMade from "tradermade-nodejs-sdk";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function cryptoList() {
  const data = await tm.getCryptoList();
  console.log(data);
}

cryptoList().catch(console.error);
