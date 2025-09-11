import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="max-w-[1200px] mx-auto ">
				<main className="px-10">{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
