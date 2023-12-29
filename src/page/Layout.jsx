import Hero from '../component/Hero';
import Navbar from '../component/Navbar';

function Layout() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
			</main>
		</div>
	);
}

export default Layout;
