import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import Topbar from './Topbar';
import Nav from './Nav';
import { nav_items } from '../../constants/NavData';
import { IoIosSearch } from 'react-icons/io';
import { IoBagHandle } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
	return (
		<>
			<Topbar />
			<header id="header" className="px-2">
				<div className="container-lg">
					<div className="main-header d-flex justify-content-around mt-2">
						<img src={Logo} class="img-fluid" alt="..." />
						<Nav nav_items={nav_items} />
						<div className="box-icons d-flex gap-3 align-items-center fs-3">
							<IoIosSearch />
							<IoBagHandle />
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
