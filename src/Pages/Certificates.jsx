import React from 'react';
import { useState } from 'react';
import Header from './Header'
import MenuPage from './MenuPage'
import CSS from '../Images/CSS.png'
import HTML from '../Images/HTML.png'
import Javascript from '../Images/Javascript.png'
import react from '../Images/react.png'
import Responsive from '../Images/Responsive.png'
import CodingforMarketers from '../Images/CodingforMarketers.png'

const Certificates = ()=>{
	const [showMenu, setShowMenu] = useState(false)
	return(
		<div className="bg-sky-300 bg-gradient-to-r from-cyan-500 to-blue-500">
		<div>
		<Header menu={() => setShowMenu(!showMenu)}
				showAdd={showMenu} />
			{showMenu && <MenuPage />}
		</div>
		<section className="p-4">
		<header className="text-center text-white m-2 text-xl font-bold">
		My Certificates</header>
		<p className="text-white m-4 font-bold text-base">Awarding Body: SOLOLEARN</p>

		<div className="m-4 md:grid md:grid-cols-2 md:gap-5">
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">HTML Course Certificate</p>
			<img src={HTML} alt="" className="rounded-lg"/>
		</div>
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">CSS Course Certificate</p>
			<img src={CSS} alt="" className="rounded-lg"/>
		</div>
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">Javascript Course Certificate</p>
			<img src={Javascript} alt="" className="rounded-lg"/>
		</div>
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">React.js Course Certificate</p>
			<img src={react} alt="" className="rounded-lg"/>
		</div>
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">Coding for Marketers Course Certificate</p>
			<img src={CodingforMarketers} alt="" className="rounded-lg"/>
		</div>
		<div className="mb-6 bg-slate-300 rounded-lg p-2">
		<p className="text-gray-600 m-2 text-center md:text-lg">Responsive Web Design Course Certificate</p>
			<img src={Responsive} alt="" className="rounded-lg"/>
		</div>
		</div>
		</section>
		<footer className="bg-[#232323] p-6">
			<p className="text-white">&copy; 2023</p>
		</footer>
		</div>
		)
}
export default Certificates;