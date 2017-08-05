var React       =   require('react');
var ReactDOM    =   require('react-dom');
var Greeter     =   require('./components/Greeter');


var firstName = "Akshar"

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
