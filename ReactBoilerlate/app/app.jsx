var React       =   require('react');
var ReactDOM    =   require('react-dom');

var objOne = {
  name: "Akshar",
  location: "Bangalore"
}

var objTwo = {
  last: "Dave",
  ...objOne //spread operator for combining two objects
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById('app')
);
