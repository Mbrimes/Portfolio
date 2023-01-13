import React from 'react';
import { useState } from 'react';
import Header from './Header'
import MenuPage from './MenuPage'
import email from '../Images/email.png'
import phonec from '../Images/phonec.png'
import contactme from '../Images/contactme.jpg'
import { AiOutlineHome } from 'react-icons/ai'

const Contact = ()=>{
	const [showMenu, setShowMenu] = useState(false)
	return(
		<div className="bg-sky-300 bg-gradient-to-r from-cyan-500 to-blue-500">
		<div>
		<Header menu={() => setShowMenu(!showMenu)}
				showAdd={showMenu} />
			{showMenu && <MenuPage />}
		</div>
		<div>
			<img src={contactme} alt="contact" className="h-[300px] md:h-[450px] w-full"/>
			<h1 className="text-white font-bold text-3xl absolute top-56 right-[5.5rem] md:absolute md:top-72 md:right-[18rem] md:text-5xl lg:absolute lg:top-96 lg:right-96">Contact Me</h1>
		</div>
		<section className="p-2 mt-8">
			<div className="text-center lg:grid lg:grid-cols-2 lg:mb-12">
				<div className="bg-gray-300 w-72 mx-auto pb-2 mb-3 rounded-lg"><a href="Marho.jak@gmail.com" target="_blank" rel="noreferrer">​<img src={email} alt="" className="mx-20 "/>Marho.jak@gmail.com</a></div>
				<div className="bg-gray-300 w-72 mx-auto pb-2 rounded-lg"><a href="tel:+2348083100930" target="_blank" rel="noreferrer">​<img src={phonec} alt="" className="mx-20 mb-3"/>+2348083100930</a></div>
			</div>
			<div className="my-3 bg-gray-300 p-2 border-solid border-2 border-gray-600 rounded-lg md:w-[40rem] md:mx-auto md:h-[350px]">
			<p className="font-bold text-xl pb-2"><AiOutlineHome className="inline mr-4"/> Lagos, Nigeria </p>
			<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.260322420423!2d3.3911879147415047!3d6.614544395216734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b931c0c005e83%3A0x97e696423d41711!2s2%20Bola%20Adesanya%20St%2C%20Ikosi%20Ketu%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1673613676984!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mx-auto md:w-[38rem] md:h-[300px]"></iframe></div>
		</section>
		<footer className="bg-[#232323] p-6">
			<p className="text-white">&copy; 2023</p>
		</footer>
		</div>
		)
}
export default Contact;