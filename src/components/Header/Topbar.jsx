import React from 'react';
import './Topbar.css';
const Topbar = () => {
	return (
		<div className="topbar">
			<div className="container-lg">
				<div className="row">
					<div className="col-sm-12 d-flex justify-content-between py-2">
						<div className="contact d-flex gap-2 text-light">
							<a className="text-light" href="#">
								cskh.vans@gmail.com
							</a>
							<span>/</span>
							<a className="text-light" href="#">
								0369933655
							</a>
						</div>
						<div className="signup d-flex gap-2 text-light">
							<a className="text-light" href="#">
								Đăng ký
							</a>
							<span>/</span>
							<a className="text-light" href="#">
								Đăng nhập
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
