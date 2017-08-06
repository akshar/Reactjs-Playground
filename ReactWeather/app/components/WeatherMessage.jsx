var React = require('react');

var WeatherMessage = React.createClass({
  var {temp, location} = this.props;
  render: function() {
    return (
      <h3>It's {temp} in {location}!</h3>
    );
  }
});

module.exports = WeatherMessage;
