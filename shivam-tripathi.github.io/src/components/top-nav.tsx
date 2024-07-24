
import { Menu } from 'lucide-react';
import './top-nav.css';

const TopNav = ({ toggleSideNav }: { toggleSideNav: () => void}) => {
	return (
			<div className="topNav">
				<Menu className='mobile menu' onClick={() => {
					toggleSideNav();
				}}/>
				<a className='title' href='/'>Kalpavriksha</a>
			</div>
	);
};

export default TopNav;
