var React           =  require('react');
var GreeterMessage  =  require('GreeterMessage');
var GreeterForm     =  require('GreeterForm');

// Greeter is a container component which maintains state. Updates its children when states get updated.
// updateing props value is not allwoed in React
var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default message prop'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  updateState: function(updatedObj) {
    this.setState(updatedObj);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm updateGreeter={this.updateState}/>
      </div>
    );
  }
});

module.exports = Greeter;