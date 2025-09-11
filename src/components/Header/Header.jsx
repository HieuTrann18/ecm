import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import { nav_items } from '../../constants/NavData';
import { IoIosSearch } from 'react-icons/io';
import { IoBagHandle } from 'react-icons/io5';

const Header = () => {
	const [navItems, _] = useState(nav_items);

	return (
		<header>
			<div className="text-sm">
				{/* Top bar */}
				<div className=" bg-black text-white text-base">
					<div className="mx-auto flex max-w-7xl justify-between px-5 py-2">
						<div className="contact space-x-4">
							<a href="">hieut@gmail.com</a>
							<span>/</span>
							<a href="">0369933655</a>
						</div>
						<div className="sigin space-x-4">
							<a href="">Đăng nhập</a>
							<span>/</span>
							<a href="">Đăng ký</a>
						</div>
					</div>
				</div>

				{/* Logo + Nav */}
				<div className="mx-auto flex max-w-6xl items-center justify-center">
					<div className="logo flex items-center box-img">
						<img src={Logo} alt="logo" className="w-100 h-auto object-cover" />
					</div>

					<nav className="flex flex-wrap items-center space-x-3 text-base uppercase">
						{navItems.map((i, index) => (
							<ul key={index}>
								<li className="p-2">
									<a
										href={i.href}
										className="block px-4 py-1 hover:bg-red-700 hover:text-white cursor-move cursor-pointer"
									>
										{i.name}
									</a>
								</li>
							</ul>
						))}
					</nav>
					<div className="flex items-center space-x-5 text-2xl">
						<IoIosSearch />
						<IoBagHandle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
