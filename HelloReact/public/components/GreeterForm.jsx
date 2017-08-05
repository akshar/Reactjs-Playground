var React = require('react');

// GreeterForm is also a presnetational components and renders form and set state for parent componenet
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var updates = {}
    if(name.length>0) {
      this.refs.name.value = "";
      updates.name = name;
    }

    if(message.length>0) {
      this.refs.message.value ="";
      updates.message = message
    }
    this.props.updateGreeter(updates);
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter Name" /> <br/>
        <textarea ref="message" placeholder="Enter Message"></textarea>
        <button>submit</button>
      </form>
    );
  }
});

module.exports = GreeterForm;