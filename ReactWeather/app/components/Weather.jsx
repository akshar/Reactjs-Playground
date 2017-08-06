var React = require('react');

var WeatherForm =  require('WeatherForm');
var WeatherMessage =  require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var self = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(errormessage) {
      self.setState({isLoading: false})
      alert(errormessage);
    });
  },

  render: function() {
    var {isLoading,location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
