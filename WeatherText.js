import React from "react";

export const imagesPath = {
  clear:  {
    uri: require("./assets/clear.png")
  },
  pcloudy:  {
    uri: require("./assets/pcloudy.png")
  },
  mcloudy:  {
    uri: require("./assets/mcloudy.png")
  },
  cloudy:  {
    uri: require("./assets/cloudy.png")
  },
  humid:  {
    uri: require("./assets/humid.png")
  },
  lightrain:  {
    uri: require("./assets/lightrain.png")
  },
  oshower:  {
    uri: require("./assets/oshower.png")
  },
  ishower:  {
    uri: require("./assets/ishower.png")
  },
  lightsnow:  {
    uri: require("./assets/lightsnow.png")
  },
  rain:  {
    uri: require("./assets/rain.png")
  },
  snow:  {
    uri: require("./assets/snow.png")
  },
  rainsnow:  {
    uri: require("./assets/rainsnow.png")
  },
  ts:  {
    uri: require("./assets/ts.png")
  }, 
  tsrain:  {
    uri: require("./assets/tsrain.png")
  },
}

export const weatherTypeMeaning = {
  clear: "Ясно",
  pcloudy: "Переменная облачность",
  mcloudy: "Облачно",
  cloudy: "Очень облачно",
  humid: "Туманно",
  lightrain: "Небольшой дождь или ливень",
  oshower: "Периодически дождь",
  ishower: "Локальный дождь",
  lightsnow: "Легкий или случайный снег",
  rain: "Дождь",
  snow: "Снег",
  rainsnow: "Снег и дождь",
  ts: "Возможна гроза", 
  tsrain: "Гроза",
}

export const weatherTypeDefinition = {
  clear: "Общая облачность менее 20%",
  pcloudy: "Общая облачность от 20% до 60%",
  mcloudy: "Общая облачность от 60% до 80%",
  cloudy: "Общая облачность более 80%",
  humid: "Относительная влажность более 90% при общей облачности менее 60%",
  lightrain: "Количество осадков менее 4 мм/час при облачности более 80%",
  oshower: "Количество осадков менее 4 мм/час при облачности от 60% до 80%",
  ishower: "Количество осадков менее 4 мм/час при облачности менее 60%",
  lightsnow: "Количество осадков менее 4 мм/час",
  rain: "Количество осадков более 4 мм/час",
  snow: "Количество осадков  более 4 мм/час",
  rainsnow: "",
  ts: "Количество осадков менее 4 мм/час",
  tsrain: "Количество осадков более 4 мм/час",
}

export const windSpeedTypeMeaning = {
  1: "Штиль",
  2: "Слабый ветер",
  3: "Умеренный ветер",
  4: "Легкий ветер",
  5: "Сильный ветер",
  6: "Штормовой ветер",
  7: "Шторм",
  8: "Ураган",
}

export const windSpeedTypeDefinition = {
  1: "Ниже 0,3 м/с",
  2: "0,3 - 3,4 м/с",
  3: "3,4 - 8,0 м/с",
  4: "8,0 - 10,8 м/с",
  5: "10,8 - 17,2 м/с",
  6: "17,2 - 24,5 м/с",
  7: "24,5 - 32,6 м/с",
  8: "Более 32,6 м/с",
}

