
import './top-nav.css';

const Menu = () => {
  return <img className="mobile menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==" />;
}

const TopNav = () => {
	return (
			<div className="topNav">
				<Menu />
				<a className='title' href='/'>Kalpavriksha</a>
			</div>
	);
};

export default TopNav;
