import { Client } from "./client.js";
import {
  TIME_SERIES_FORMAT,
  TIME_SERIES_INTERVAL,
  TIME_SERIES_PERIOD,
  DATA_EXPORTS_PANDAS_DF_FIELDS,
  DATA_EXPORTS_PANDAS_DF_FORMAT,
} from "./constants.js";

class TraderMade {
  constructor() {
    this.apiKey = null;
    this.client = null;
  }

  _validateApiKey(apiKey) {
    if (typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new Error("Api key must be a non empty string.");
    }
  }

  //Set Rest api key
  setRestApiKey(apiKey) {
    this._validateApiKey(apiKey);
    this.apiKey = apiKey;
    this.client = new Client(apiKey);
  }

  //Get Rest api key
  getRestApiKey() {
    return this.apiKey;
  }

  //Get Live Exchange Rates​
  async getLiveRates(currency, per_quote_ts, volume) {  //remove exchange
    if (!currency) {
      throw new Error("currency is required.");
    }
    console.log(currency)
    const data = await this.client.get("/live", {
      currency,
      per_quote_ts,
      volume,
    });
    return data;
  }

  //Get List of Live Currencies​
  async getLiveCurrencyList() {
    const data = await this.client.get("/live_currencies_list");
    return data;
  }

  //Get List of Streaming Instruments​
  async getStreamingCurrencyList() {
    const data = await this.client.get("/streaming_currencies_list");
    return data;
  }

  //Get List of Live Cryptocurrencies​
  async getCryptoList() {
    const data = await this.client.get("/live_crypto_list");
    return data;
  }

  //Get List of Historical Currencies​
  async getHistoricalCurrencyList() {
    const data = await this.client.get("/historical_currencies_list");
    return data;
  }

  //Get List of Available CFDs​
  async getCfdList() {
    const data = await this.client.get("/cfd_list");
    return data;
  }

  //Get Historical Exchange Rates​
  async getHistoricalRates(date, symbol) {  
    if (!date || !symbol) {
      throw new Error("date_time,symbol are required.");
    }

    const data = await this.client.get("/historical", {
      currency:symbol,
      date,
    });
    return data;
  }

  //Get Hourly Historical Data​
  async getHourlyHistoricalData(date_time, symbol) {
    if (!date_time || !symbol) {
      throw new Error("date_time,symbol are required.");
    }

    const data = await this.client.get("/hour_historical", {
      date_time,
      currency:symbol,
    });
    return data;
  }

  //Get Minute Historical Data​
  async getMinuteHistoricalData(date_time, symbol) {
    if (!date_time || !symbol) {
      throw new Error("date_time,symbol are required.");
    }
    const data = await this.client.get("/minute_historical", {
      date_time,
      currency:symbol,
    });
    return data;
  }

  //Get Historical Tick Data​
  async getTickHistoricalData(symbol, startDate, endDate, format) {
    if (!symbol || !startDate || !endDate) {
      throw new Error("symbol, startDate and endDate are required.");
    }
    const start = encodeURIComponent(startDate);
    const end = encodeURIComponent(endDate);
    const data = await this.client.get(
      `/tick_historical/${symbol}/${start}/${end}`,
      { format }
    );
    return data;
  }

    //Get Historical Tick Sample Data​
  async getTickHistoricalDataSample(symbol, startDate, endDate, format) {
    if (!symbol || !startDate || !endDate || !format) {
      throw new Error("Symbol,startDateTime and endDateTime are required.");
    }
    const startDateAndTime = encodeURIComponent(startDate);
    const endDateAndTime = encodeURIComponent(endDate);
    const data = await this.client.get(
      `/tick_historical_sample/${symbol}/${startDateAndTime}/${endDateAndTime}`,
      { format }
    );
    return data;
  }

  //Get Time Series Data
  async getTimeSeriesData(
    currency,
    startDate,
    endDate,
    interval,
    period,
    format,
    weekend
  ) {
    if (!TIME_SERIES_FORMAT.includes(format)) {
      throw new Error(
        `Invalid format.Please use one of : ${TIME_SERIES_FORMAT}`
      );
    }
    if (!TIME_SERIES_INTERVAL.includes(interval)) {
      throw new Error(
        `Invalid interval.Please use one of : ${TIME_SERIES_INTERVAL}`
      );
    }
    const periodNum = Number(period);
    if (!TIME_SERIES_PERIOD[interval]?.includes(periodNum)) {
      throw new Error(
        `Invalid period.Please use one of : ${TIME_SERIES_PERIOD[interval].join(
          ", "
        )} `
      );
    }
    const data = await this.client.get("/timeseries", {
      currency,
      start_date: startDate,
      end_date: endDate,
      interval,
      period: periodNum,
      format,
      weekend,
    });
    return data;
  }

  //Get Market Open Status
  async getOpenMarketStatus() {
    const data = await this.client.get("/market_open_status");
    return data;
  }

  //Get Market Opening Times
  async getMarketOpenTiming() {
    const data = await this.client.get("/market_opening_times");
    return data;
  }

  //Convert Currency Amount
  async getCurrencyConversion(from, to, amount) {
    const data = await this.client.get("/convert", {
      from,
      to,
      amount
    });
    return data;
  }

  //Get Data as Pandas DataFrame
  async getDataAsPandasDataFrame(symbol, startDate, endDate, format, fields) {
    if (!DATA_EXPORTS_PANDAS_DF_FORMAT.includes(format)) {
      throw new Error(
        `Invalid format.Please use one of : ${DATA_EXPORTS_PANDAS_DF_FORMAT}`
      );
    }
    if (!DATA_EXPORTS_PANDAS_DF_FIELDS.includes(fields)) {
      throw new Error(
        `Invalid format.Please use one of : ${DATA_EXPORTS_PANDAS_DF_FIELDS}`
      );
    }
    const data = await this.client.get("/pandasDF", {
      currency:symbol,
      start_date: startDate,
      end_date: endDate,
      format,
      fields,
    });
    return data;
  }
}
export default TraderMade;
