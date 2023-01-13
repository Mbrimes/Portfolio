const Button = ({text,onClick}) => {
	return(
		<button onClick={onClick} className="absolute top-4 right-3 md:text-3xl lg:hidden">
		{text}
		</button>
	)
}


export default Button;