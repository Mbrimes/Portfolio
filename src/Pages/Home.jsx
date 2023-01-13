import React from 'react';
import { useState } from 'react';
import Header from './Header'
import MenuPage from './MenuPage'
import Sliding from './Sliding'
import Profile from '../Images/Profile.jpg'
import { GoCalendar} from 'react-icons/go'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai';

const Homepage = ()=>{
	const [showMenu, setShowMenu] = useState(false)

	return(
		<div className=" bg-sky-300 bg-gradient-to-r from-cyan-500 to-blue-500">
		{/*top section*/}
		<div>
		<Header menu={() => setShowMenu(!showMenu)}
				showAdd={showMenu} />
			{showMenu && <MenuPage />}
		</div>

	{/*body section*/}
	<section className="p-4 md:bg-gray-300 md:m-20 md:rounded-lg">
		<div className="mt-5 mx-4 md:mt-20 md:mx-12 lg:flex md:mt-4 lg:mx-auto">
		<img src={Profile} alt="" className="rounded-full lg:w-96 lg:rounded-lg"/>	
		<div className="m-3">
			<p className="text-slate-100 mt-2 md:mt-12 md:text-xl md:text-gray-600 lg:text-black lg:text-2xl lg:mt-0">
			Hi,my name is</p> 
			<p className="text-white text-xl mb-1 md:text-xl md:font-bold md:text-gray-600 lg:text-black lg:text-3xl"><span className=" font-bold text-2xl md:text-5xl">Djakpo Abraham</span> 
			<br/>FrontEnd Web Developer</p>
			<p className="text-slate-100 text-left md:text-xl md:mt-8 md:leading-10 md:text-gray-600 lg:text-black lg:text-xl lg:mt-6 ">I am a self taught Front-End Web
			 Developer, with a flair for bringing innovative UX design to life. I'm currently at a junior level,
			 but i always ensure to deliver a bug-free, high quality, beautiful and intuitive website. My objective is to create and maintain
			 optimally functional websites as tools in achieving the company's mission and vision. I'm passionate about implementing user-friendly
			 platforms with simple functionality  </p>
			 <div className="mt-5 text-white md:text-gray-600">
			 	<p className="mb-3"><GoCalendar className="inline mr-3"/> 29th December,2003</p>
			 	<a href="+2348083100930" target="_blank" rel="noreferrer" className="block mb-3">​<BsTelephone className="inline mr-3"/>+2348083100930</a>
			 	<a href="Marho.jak@gmail.com" target="_blank" rel="noreferrer" className="block mb-3">​<AiOutlineMail className="inline mr-4"/>Marho.jak@gmail.com</a>
			 	<p ><AiOutlineHome className="inline mr-4"/> Lagos, Nigeria </p>
			 </div>
		</div>
		</div>
		</section>
	{/*About section*/}
				<section className="p-4 bg-gray-300 md:p-24 lg:flex">
				<div className="p-5 lg:p-0 lg:text-center lg:ml-20">
				<h1 className="my-3 text-2xl font-bold ">ABOUT MYSELF</h1>
					<p className="text-gray-600 md:text-base lg:w-96 lg:mr-8">
					My name is <b> Djakpo Abraham</b>. I am a 
					self taught FrontEnd Web Developer, with a few years worth of experience.
					<br/>
					I started learning how to code when i graduated from school in November 2020,
					I'm currently at a junior level,but i 
					always ensure to deliver a bug-free, high quality, beautiful and intuitive 
					website.I am passionate about coding, doing research, love reading and 
					writing clean readable codes. </p>
				</div>

			{/*My Expericence Section*/}
			<div className="text-gray-600">
			<h1 className="text-gray-600 font-bold text-xl text-center ">My Coding Expericence</h1>
			<p className="p-2">After Effects
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-56 rounded-lg md:w-[30rem] lg:w-56">
				</div>
				</div></div>
			</p>
			<p className="p-2">Sublime Text Editor
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-64 rounded-lg md:w-[32rem] lg:w-56">
				</div>
				</div></div>
			</p>
			<p className="p-2">HTML5
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-full rounded-lg md:w-[34rem] lg:w-60"></div>
				</div></div>
			</p>
			<p className="p-2">CSS
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-64 rounded-lg md:w-[32rem] lg:w-60"></div>
				</div></div>
			</p>
			<p className="p-2">SCSS
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-64 rounded-lg md:w-[32rem] lg:w-60"></div>
				</div></div>
			</p>
			<p className="p-2">JAVASCRIPT
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-56 rounded-lg md:w-[25rem] lg:w-48"></div>
				</div></div>
			</p>
			<p className="p-2">REACT.JS
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-48 rounded-lg md:w-[24rem] lg:w-44"></div>
				</div></div>
			</p>
			<p className="p-2">Tailwind.CSS
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-1/2 rounded-lg md:w-[20rem] lg:w-40"></div>
				</div></div>
			</p>
			<p className="p-2">Git
				<div className="p-1 bg-gray-300 rounded-lg ">
				<div className="w-full bg-gray-200 h-2 rounded-lg lg:w-64">
				<div className="bg-gradient-to-r from-green-400 to-blue-500 
				h-2 w-56 rounded-lg md:w-[28rem] lg:w-52"></div>
				</div></div>
			</p>
					</div>
				</section>
			{/*My Certificate section*/}
			<section className="p-4">
				<header className="font-bold text-white text-center text-xl mb-3">My Certificates</header>
				<div className="mx-8"><Sliding/></div>
			</section>
			<footer className="bg-[#232323] p-6">
			<p className="text-white">&copy; 2023</p>
		</footer>
		</div>
		)
}
export default Homepage;