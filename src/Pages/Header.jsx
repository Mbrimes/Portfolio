import Button from './Button';
import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
const Header = ({title, menu, showAdd}) => {
	return (
		<>
		<header className=" bg-sky-300 p-2 lg:p-5">
			<h1 className="text-left font-bold text-2xl md:text-2xl lg:text-xl">{title}</h1>
			
			<Button text={showAdd ? <FaTimes className="text-white" /> : <GrMenu 
			className="text-white" />}
			 onClick={menu}/>
		</header>

		<nav className="hidden lg:inline lg:text-xl lg:bg-white ">
			<ul className="grid grid-cols-5  text-base absolute top-7 right-6 w-[30rem]">
				<li className="hover:bg-teal-600 w-16 border-solid border-2 border-teal-600 rounded-lg text-center"><Link to="/">Home</Link></li>
				<li className="hover:bg-teal-600 w-16 border-solid border-2 border-teal-600 rounded-lg text-center"><Link to="/About">About</Link></li>
 				<li className="mr-6 hover:bg-teal-600 w-24 border-solid border-2 border-teal-600 rounded-lg text-center"><Link to="/Certificates">Certificates</Link></li>
 				<li className="ml-3 hover:bg-teal-600 w-16 border-solid border-2 border-teal-600 rounded-lg text-center"><Link to="/Portfolio">Portfolio</Link></li>
				<li className="hover:bg-teal-600 w-16 border-solid border-2 border-teal-600 rounded-lg text-center"><Link to="/Contact">Contact</Link></li>
			</ul>
		</nav>
		</>
	)
}

Header.defaultProps = {
	title:"Marabs"
}

export default Header; 