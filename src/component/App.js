import React from "react";
import MathPractice from './MathPractice';
import Addition from './Addition';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./../css/style.css";


class App extends React.Component {
	render() {
		return (
		//   <MathPractice />
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" render={<MathPractice />} /> */}
					<Route index element={<MathPractice />} />
					<Route path="/addition" element={<Addition />} />
				</Routes>
			</BrowserRouter>
			// <div>
			// 	<nav>
			// 	<ul>
			// 		<li>
			// 		<Link to="/">Home</Link>
			// 		</li>
			// 		<li>
			// 		<Link to="/about">About</Link>
			// 		</li>
			// 		<li>
			// 		<Link to="/users">Users</Link>
			// 		</li>
			// 	</ul>
			// 	</nav>

			// 	{/* A <Switch> looks through its children <Route>s and
			// 		renders the first one that matches the current URL. */}
			// 	<Switch>
			// 	<Route path="/about">
			// 		<About />
			// 	</Route>
			// 	<Route path="/users">
			// 		<Users />
			// 	</Route>
			// 	<Route path="/">
			// 		<Home />
			// 	</Route>
			// 	</Switch>
			// </div>
		);
	}
}

export default App;
