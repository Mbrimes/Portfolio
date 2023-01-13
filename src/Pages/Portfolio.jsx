import React from 'react';
import { useState } from 'react';
import Header from './Header'
import MenuPage from './MenuPage'
import Naijalink from '../Images/Naijalink.png'
import Bookings from '../Images/Bookings.png'
import {MdPreview} from 'react-icons/md'

const Portfolio = ()=>{
	const [showMenu, setShowMenu] = useState(false)
	return(
		<div className="pb-6 bg-sky-300 bg-gradient-to-r from-cyan-500 to-blue-500">
		<div>
		<Header menu={() => setShowMenu(!showMenu)}
				showAdd={showMenu} />
			{showMenu && <MenuPage />}
		</div>
		<header className="text-center font-bold text-xl text-white mt-4 lg:mt-12 lg:text-3xl">Web Development</header>
		<div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:p-5">
	{/*React Project*/}
		<div className="my-8 bg-gray-300 w-72 mx-auto rounded-lg p-2 hover:bg-teal-600 md:w-[32rem] lg:w-auto ">
		<a href="https://naijalink-clone.netlify.app/" target="_blank" rel="noreferrer">
		<p className="font-bold mb-2"> <MdPreview className="text-2xl inline mr-2"/>React Project1: Naijalink</p>
		<img src={Naijalink} alt=""/>
		<p className="pt-3 text-center"><b>Description:</b> This website was created using React.Js and SCSS, it is a simple multi-page 
		website which gives basic information about a company and the services they offer.</p>
		</a>
		</div>

	{/*Basic HTML,CSS,javascript project*/}
		<div className="my-8 bg-gray-300 w-72 mx-auto rounded-lg p-2 hover:bg-teal-600 md:w-[32rem] lg:w-auto ">
		<a href="https://t2est.netlify.app/" target="_blank" rel="noreferrer">
		<p className="font-bold mb-2"> <MdPreview className="text-2xl inline mr-2"/> Using Basic HTML,SCSS and Javascript: Bookings Africa </p>
		<img src={Bookings} alt=""/>
		<p className="pt-3 text-center"><b>Description:</b> This website was created using HTML5, CSS and Javascript, it is a simple
		website which gives basic information about a company and the services they offer.</p>
		</a>
		</div>
		</div>
		
		</div>
		)
}
export default Portfolio;