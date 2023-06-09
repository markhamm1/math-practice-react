import React from "react";
import { useNavigate as navigate } from "react-router-dom";

class MathPractice extends React.Component {	
	onClickAddition = () => {

		console.log('onClickAddition');
		navigate("/addition");
	};
	onClickSubtraction = () => {
		console.log('onClickSubtraction');
	};
	onClickMultiplication = () => {
		console.log('onClickMultiplication');
	};
	onClickDivision = () => {
		console.log('onClickDivision');
	};
	
	render() {
		return (
			<div className="home-screen-div">
				<div id="header">
					<h1>Equations</h1>
				</div>
				<div id="home-screen" className="home-screen-btn-div">
					<button className="home-screen-btn" onClick={this.onClickAddition}>ADDITION</button>
					<button className="home-screen-btn" onClick={this.onClickSubtraction}>SUBTRACTION</button>
					<button className="home-screen-btn" onClick={this.onClickMultiplication}>MULTIPLICATION</button>
					<button className="home-screen-btn" onClick={this.onClickDivision}>DIVISION</button>
				</div>
			</div>
		);

	}
}

export default MathPractice;
