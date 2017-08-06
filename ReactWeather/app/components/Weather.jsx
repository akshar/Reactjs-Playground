var React = require('react');

var WeatherForm =  require('WeatherForm');
var WeatherMessage =  require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Bangalore',
      temp: 27
    }
  },

  handleSearch: function(location) {
    var self = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp
      });
    },function(err) {
      alert(err);
    });
  },

  render: function() {
    var {location, temp} = this.state;
    return (
      <div>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMessage location={location} temp={temp} />
      </div>

    );
  }
});

module.exports = Weather;
