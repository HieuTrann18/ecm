import { useState } from 'react';
import './assets/styles/index.css';
import Theme from './components/ThemeControl/Theme';
function App() {
	const themes = {
		dark: '#333',
		light: '#fff',
	};
	const [theme, setTheme] = useState(themes.light);

	const handleChangeTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};
	return (
		<>
			<div
				style={{ backgroundColor: theme }}
				className="h-[100vh] w-[100vw] flex justify-center items-center flex-col"
			>
				<h1 className="text-3xl text-blue font-bold text-center">Hello world</h1>
				<Theme theme={theme} changeTheme={handleChangeTheme} />
			</div>
		</>
	);
}

export default App;
