var axios = require('axios');

//71d21edecb120cb799c3ff5923b50b99
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=71d21edecb120cb799c3ff5923b50b99&units=imperial"

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {
      if(res.data.cod && res.data.message) {
      } else {
        return res.data.main.temp
      }
    },(res) => {
      throw new Error(res.data.message);
    });
  }
}
