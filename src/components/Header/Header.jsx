import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import { nav_items } from '../../constants/NavData';
import { IoIosSearch } from 'react-icons/io';
import { IoBagHandle } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
	const [navItems, _] = useState(nav_items);

	return (
		<header>
			<div className="text-sm">
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
				<div className="mx-auto flex max-w-6xl items-center justify-center my-2">
					<div className="logo flex items-center box-img">
						<a href="#">
							{' '}
							<img src={Logo} alt="logo" className="w-100 h-auto object-cover" />
						</a>
					</div>
					<nav className="flex flex-wrap items-center space-x-2 text-base uppercase">
						{navItems.map((i, index) => (
							<ul key={index} className="relative group">
								<li className="p-2 flex items-center  hover:bg-red-700 hover:text-white cursor-move cursor-pointer">
									<a href={i.href} className="block px-2 py-1">
										{i.name}
									</a>
									{i.hasArrow && <IoIosArrowDown size={16} />}
								</li>
								{i.hasArrow && i.subMenu && (
									<div className="absolute hidden group-hover:block z-50 left-0  bg-white w-40 shadow-md">
										<div className="flex flex-col gap-2 shadow-2xl">
											{i.subMenu.map((sub, index) => (
												<a
													className="p-3 cursor-pointer  hover:bg-red-700 hover:text-white"
													key={index}
												>
													{sub.name}
												</a>
											))}
										</div>
									</div>
								)}
							</ul>
						))}
					</nav>
					<div className="flex items-center space-x-5 text-2xl">
						<div className="relative group">
							<IoIosSearch className="cursor-pointer m-2" />
							<input
								type="text"
								placeholder="Search..."
								className="absolute top-full -translate-x-1/2  bg-gray-50 border  text-gray-900 text-sm w-60 p-2 hidden group-hover:block"
							/>
						</div>

						<IoBagHandle />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
