import React from 'react';

const Theme = ({ theme, changeTheme }) => {
	return (
		<div>
			<button
				onClick={changeTheme}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
			>
				{theme === '#fff' ? 'Switch to dark' : 'Switch to light'}
			</button>
		</div>
	);
};

export default Theme;
