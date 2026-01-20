export const DEFAULT_BASE_URL = "https://marketdata.tradermade.com/api/v1";

export const TIME_SERIES_FORMAT = ["records","csv","index","columns","split"];
export const TIME_SERIES_INTERVAL = ["daily","hourly","minute"];
export const TIME_SERIES_PERIOD = {
    "daily": [1],
    "hourly":[1,2,4,6,8,24],
    "minute":[1,5,10,15,30]
};
export const DATA_EXPORTS_PANDAS_DF_FIELDS = ["close","ohlc"];
export const DATA_EXPORTS_PANDAS_DF_FORMAT = ["records","columns","index","split"];



