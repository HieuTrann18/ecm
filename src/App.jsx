import './assets/styles/index.css';
import Layout from '@components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import '../src/assets/styles/index.css';
function App() {
	return (
		<>
			<Layout>
				<Home />
			</Layout>
		</>
	);
}

export default App;
