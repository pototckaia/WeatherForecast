import { weatherCurrentUrl, btcCurrentPriceUrl } from "./urlConfig"
import moment from 'moment';
import 'moment-timezone';
import * as Localization from 'expo-localization';

class WeatherData {
  constructor(date, type, minTemp, maxTemp, windSpeed) {
    this.date = date,
    this.type = type;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.windSpeed = windSpeed;
  }
}

export default class DateLoading  {

  async getWeathereForecastForWeek(lat, lon) {
    var response = await fetch(weatherCurrentUrl(lat, lon));
    var json = await response.json();
    console.log(weatherCurrentUrl(lat, lon))
    console.log(json)

    var timezone = Localization.timezone;
    var currentDayFormate = moment().tz("Etc/GMT").format("YYYYMMDD");
    console.log(currentDayFormate)
    var forecast = []
    var currentDayForecast = null
    for (let i in json.dataseries) {
      var dt = json.dataseries[i]
      var weather = new WeatherData(
        moment(dt.date, "YYYYMMDD").tz(timezone),
        dt.weather,
        dt.temp2m.min,
        dt.temp2m.max,
        dt.wind10m_max
      )
      forecast.push(weather)
      if (dt.date == currentDayFormate) {
        currentDayForecast = weather
      }
    }
    return [forecast, currentDayForecast]
  }

  async getBtcPrice() {
    var response = await fetch(btcCurrentPriceUrl);
    var json = await response.json();
    return json.bpi.USD.rate_float;
  }
}