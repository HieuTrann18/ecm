import React from 'react';
import './Nav.css';
const Nav = ({ nav_items }) => {
	return (
		<nav className="nav">
			<ul className="list-unstyled d-flex align-items-center m-0 flex-wrap">
				{nav_items.map((i, index) => (
					<li key={index}>
						<a href="#" className="text-dark">
							{i.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
