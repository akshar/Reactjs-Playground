var React = require('react');

var WeatherForm =  require('WeatherForm');
var WeatherMessage =  require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Bangalore',
      temp: 27
    }
  },

  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23
    });
  },

  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    return (
      <div>
      <WeatherForm onSearch={this.handleSearch}/>
      <WeatherMessage location={location} temp={temp} />
      </div>

    );
  }
});

module.exports = Weather;
