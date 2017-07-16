var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default message prop'
    };
  },

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

var firstName = "Akshar"
var message = "yo ssup mr white"
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
