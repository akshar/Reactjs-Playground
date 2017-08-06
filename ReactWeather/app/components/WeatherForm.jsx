var React = require('react');

var WeatherForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDeafult();
    var city = this.ref.city.value;
    if(city != "") {
      this.ref.city.value ="";
      this.props.city(city);
    }
  },

  render: function() {
    return (
      <div>
        <h1> Get Weather</h1>
        <form action={this.handleSubmit}>
          <input type="text" ref="city" placeholder="Enter city name" /> <br/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});


module.exports = WeatherForm;
