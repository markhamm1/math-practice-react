import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./component/Home"
import Addition from "./component/Addition"
import Subtraction from "./component/Subtraction"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="addition" element={<Addition />} />
				<Route path="subtraction" element={<Subtraction />} />
			</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
