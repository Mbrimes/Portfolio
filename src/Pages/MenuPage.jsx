import { Link } from 'react-router-dom';
const MenuPage = (menu) => {
	return (
		<div className="bg-teal-600 h-screen p-6 text-white">
			<nav className="text-center leading-10">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/CV">CV</Link></li>
				<li><Link to="/Certificates">Certificates</Link></li>
				<li><Link to="/Contact">Contact</Link></li>
			</ul>
		</nav>
		</div>
	)
}

export default MenuPage;