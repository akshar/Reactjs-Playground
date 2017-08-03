//GreeterMessage is a presentational component accepts props renders to screen
var GreeterMessage = React.createClass({
    render: function() {
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

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

var firstName = "Akshar"

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
