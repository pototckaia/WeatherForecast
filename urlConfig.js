export const btcCurrentPriceUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

export function weatherCurrentUrl(lat, lon) {
    return "http://www.7timer.info/bin/civillight.php?lon=" + lon + "&lat=" + lat + "&ac=0&unit=metric&output=json&tzshift=0"
}
