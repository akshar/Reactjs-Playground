var Greeter = React.createClass({
  render: function() {
       return React.createElement('h1',null,'helloreact');  // normal syntax
    // return ( // jsx syntax
    //   <div>
    //     <h1>Hello react</h1>
    //     <p>This is from a component</p>
    //   </div>
    // );
  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
