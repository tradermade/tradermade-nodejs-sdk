# TraderMade Node.js SDK

Official Node.js client library for the TraderMade Data API.

## 🚀 Installation

Create a `src` folder for your project and install the package inside it.

```bash
mkdir src
cd src
npm init -y
npm install tradermade-nodejs-sdk

```

## 🛠️ Project Setup

Before running the code, set up your project files inside the `src` folder.

**1. Create your .env file**
Create a file named `.env` inside `src` and add your API key:

```env
TRADERMADE_API_KEY=your_api_key_here

```

**2. Create your script**
Create a file named `index.js` inside `src` and paste the code examples below.

**3. Run your code**
Run the script from your terminal:

```bash
node index.js

```

---

## 🔑 Getting Started

First, import the library and initialize the client.

```javascript
import TraderMade from "tradermade-nodejs-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

```

---

## 📚 Usage Examples

> **Looking for more?** > For a comprehensive list of examples covering more endpoints and advanced usage, please refer to our **[GitHub Examples Directory](https://github.com/omkarpandeytradermade/tradermade-nodejs-sdk/tree/main/examples)**.

After creating the client, making calls to the TraderMade API is easy. Below are examples for fetching different types of market data.

### 1. Get Live Rates

Fetch real-time data for multiple currencies or instruments at once.

```javascript
import TraderMade from "tradermade-nodejs-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function liveRates() {
  // Pass multiple currencies as a comma-separated string
  const data = await tm.getLiveRates("GBPUSD,UK100,USDJPY");
  console.log(data);
}

liveRates().catch(console.error);

```

Optional arguments: `getLiveRates(currency, per_quote_ts, volume)`.
Set `per_quote_ts` to `true` to request a Unix timestamp in each quote.
The optional `volume` value is forwarded to the API; its behavior is not yet
documented in the public REST API documentation. Omitted options are not sent,
so existing calls keep their behavior.

```javascript
const data = await tm.getLiveRates("EURUSD,GBPUSD", true, true);
```

### 2. Convert Currency

Convert a specific amount from one currency to another using live exchange rates.

```javascript
import TraderMade from 'tradermade-sdk';

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function currencyConversion(){
    try {
        const data = await tm.getCurrencyConversion(
            "EUR",   // From Currency
            "GBP",   // To Currency
            "1000"   // Amount
        );
        console.log("Conversion Result:", data);
    }
    catch (error) {
        console.error(error)
    }
};

currencyConversion().catch(console.error)

```

### 3. Get Historical Tick Data

Fetch raw tick data for a specific currency pair and time range.

```javascript
import TraderMade from "tradermade-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function tickHistoricalData() {
  try {
    const data = await tm.getTickHistoricalData(
      "GBPUSD",
      "2026-01-12 15:00",
      "2026-01-12 15:30"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

tickHistoricalData();

```

### 4. Get Time Series Data

Fetch daily time series data for analysis.

```javascript
import TraderMade from "tradermade-nodejs-sdk";

const tm = new TraderMade();
tm.setRestApiKey(process.env.TRADERMADE_API_KEY);

async function timeSeriesData() {
  try {
    const data = await tm.getTimeSeriesData(
      "EURUSD",
      "2026-01-08",
      "2026-01-10",
      "daily",
      "1",
      "records"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

timeSeriesData();

```

The optional seventh argument, `weekend`, accepts `true` or `false` for crypto
pairs. Set it to `true` to include weekend data:

```javascript
const data = await tm.getTimeSeriesData(
  "BTCUSD", "2026-10-09", "2026-10-12", "daily", "1", "records", true
);
```
