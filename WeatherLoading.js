import React, { Component } from "react";
import { weatherCurrentUrl } from "./urlConfig"

class WeatherLoading  {

    async getCurrentWeathere() {
        console.log("getCurrentWeathere")
        var response = await fetch(weatherCurrentUrl);
        var json = await response.json();
        return json
    }
}

export default WeatherLoading;