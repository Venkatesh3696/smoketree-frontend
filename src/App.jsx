import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					element={<Users />}
					path='/users'
				/>
			</Routes>
		</>
	);
}

export default App;
