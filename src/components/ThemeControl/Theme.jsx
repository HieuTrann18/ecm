import React from 'react';

const Theme = ({ theme, changeTheme }) => {
	return (
		<div>
			<button onClick={changeTheme}>
				{theme === '#fff' ? 'Switch to dark' : 'Switch to light'}
			</button>
		</div>
	);
};

export default Theme;
