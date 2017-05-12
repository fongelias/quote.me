//dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//constants
const quoteLibrary = [
	{quote: "I'm not throwing away my shot!", author: "Alexander Hamilton"},
	{quote: `How does a bastard, orphan, son of a whore and a 
			Scotsman, dropped in the middle of a forgotten 
			spot in the Caribbean by Providence, impoverished, in squalor, 
			grow up to be a hero and a scholar?`, author: "Aaron Burr (sir)"},
	{quote: "My name is Alexander Hamilton", author: "Alexander Hamilton"},
	{quote: "Alexander", author: "Alexander Hamilton"},
	{quote: "Hamilton", author: "Alexander Hamilton"},
	{quote: "AlexANNNNNDERRRRRR", author: "Eliza Hamilton"},
	{quote: "ALEXANDER HAMILTON", author: "Company of Alexander Hamilton the Tony Award winning Musical"}
];

//component
class QuoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: quoteLibrary,
			currentQuote: quoteLibrary[0],
			currentIndex: 0
		};

		//binding functions
		this.changeQuote = this.changeQuote.bind(this);
	}

	changeQuote() {
		let newIndex = this.state.currentIndex + 1 >= this.state.quotes.length ? 0 : this.state.currentIndex + 1;

		this.setState({
			currentQuote: this.state.quotes[newIndex],
			currentIndex: newIndex
		});
	}


	render() {
		return (
			<div className="quote-display">
				<h1>{this.state.currentQuote.quote}</h1>
				<p>{this.state.currentQuote.author}</p>
				<button onClick={this.changeQuote}>New Quote</button>
			</div>
		)
	}
}



ReactDOM.render(
	<QuoteApp />,
	document.getElementById("quoteApp")
);








