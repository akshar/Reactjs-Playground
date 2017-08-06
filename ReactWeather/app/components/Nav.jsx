var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Navigation Component</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>GetWeather</IndexLink>
        <Link to ="/about" activeClassName="about" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
