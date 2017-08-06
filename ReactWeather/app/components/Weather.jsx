var React = require('react');

var WeatherForm =  require('WeatherForm');
var WeatherMessage =  require('WeatherMessage');

var Weather = React.createClass({

  getInitialState: function() {
    return null;
  },

  setWeatherState: function(city) {
      this.setState({
        city: city
      })
  },

  render: function() {
    return (
      <div>
      <WeatherForm setCity={this.setWeatherState}/>
      <WeatherMessage/>
      </div>

    );
  }
});

module.exports = Weather;
