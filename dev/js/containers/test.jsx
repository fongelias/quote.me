import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props); //Allows use of this, called on parent function
		this.state = {
			name : this.props.name
		};
	}

	render() {
		return (
			<h1>Hello, {this.state.name}</h1>
		)
	}
}

const helloWorldElement = <HelloWorld name="Elias"/>;

ReactDOM.render(
	helloWorldElement,
	document.getElementById('root')
);

