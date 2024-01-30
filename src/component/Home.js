import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();

	function onClickAddition() {
		console.log('onClickAddition');
		navigate("/addition");
	};
	function onClickSubtraction() {
		console.log('onClickSubtraction');
		navigate("/subtraction");
	};
	
	return (
		<div className="home-screen-div">
			<div id="header">
				<h1>Equations</h1>
			</div>
			<div id="home-screen" className="home-screen-btn-div">
				<button className="home-screen-btn" onClick={onClickAddition}>ADDITION</button>
				<button className="home-screen-btn" onClick={onClickSubtraction}>SUBTRACTION</button>
				{/* <button className="home-screen-btn" onClick={this.onClickMultiplication}>MULTIPLICATION</button> */}
				{/* <button className="home-screen-btn" onClick={this.onClickDivision}>DIVISION</button> */}
			</div>
		</div>
	);

}
export default Home;