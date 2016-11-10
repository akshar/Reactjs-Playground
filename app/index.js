var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA ={
	name : "Akshar Dave",
	username : "akshar314",
	imgUrl : "http://avatars2.githubusercontent.com/u/12473863?v=3&s=460"
}


var HelloWorld = React.createClass({

	render : function(){
		return (
			<div>Hello {this.props.name}</div>
			)
	}
});

var ProfilePic = React.createClass({
	render : function() {
		return  (<img src ={this.props.imageUrl} />)
	}
});

var ProfileLink = React.createClass({
	render : function() {
		return (
			<div> 
			<a href = {"http://github.com/" + this.props.username }>
			{this.props.username}
			</a>
			</div>
			)
	}
});

var ProfileName = React.createClass({
	render : function() {
		return (
		<div>
		{this.props.name}
		</div>)
	}

});

var Avatar = React.createClass({
	render : function(){
		return (
			<div>
			<ProfilePic imageUrl = {this.props.user.imgUrl} />
			<ProfileName name = {this.props.user.name} />
			<ProfileLink username = {this.props.user.username} />
			</div>)
	}
})

ReactDom.render(
	<Avatar user = {USER_DATA} />,
	document.getElementById('app')
	)