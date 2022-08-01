import './App.css';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import Navbar from './components/header/Navbar';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import { getItem } from './Helpers/LocalStorage';
import { KEYS } from './utils/constants';

function App() {
	const user = getItem(KEYS.CURRENTUSER) || ""
	return (
		<div className='App'>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/signup' element={user !== "" ? <Signup /> : <Chat />} />
				<Route path='/' element={user !== "" ? <Login /> : <Chat />} />
				<Route path='/chat' element={user === "" ? <Login /> : <Chat />} />
			</Routes>
		</div>
	);
}

export default App;
