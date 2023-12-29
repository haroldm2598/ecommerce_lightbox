function Button({ hasIcon, icon, name, customStyle, handleClick }) {
	return (
		<button onClick={handleClick} className={`btn md:min-w-fit ${customStyle}`}>
			{hasIcon && icon} {name}
		</button>
	);
}

export default Button;
