import './side-nav.css';
import { navigation, blogPath } from '../routes';
import { Link } from 'react-router-dom';

export const RightButton = () => {
  return <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABXElEQVRoge3ZMU7DQBCF4R9qBCVHAAlooKOlJFEOhSJxKSAHQBwDCCV2Q2UKO1K8rOMNnpldW/ukaVyM3qckzsaBnJyc/2YBrIASqCJPCbwA830RjwmU75plKGKRQNm+mYVAVgkU7Ztnt/SBB1IARyHiiCmA4+0LPkhl02VwWt0PY7WQToZ05Ba4AdbCe3sjDfkB3oA7ImDcDLktroHLZs8Z8D5w365RhWwwV82uc0WMOqQCvgwwJhALjBlEG2MK0cSYQ7QwUSAamGgQH+ZjrBBJTHSIFKaVyZx+fRnDqxH9rTWJD7skIhpEGhEF4h7rJRDmkO0fWpIIU4iLGOUxXhthArFAqEOsEOqQ62bHBfCpiPgDkT5rnVA/pHsCToV370x+iJ1aJg0pzVvsn2/3gg/yalBkaII6ztG9bUrMfah4mUDZrnkIRWwyo/73tEigfEH93RT8SuTk5LTzC+gMdw5CThMRAAAAAElFTkSuQmCC" />
}

const SideNav = () => {
  return (
    <div className="sideNav">
      <ul className="items">
        {navigation.filter(route => route.image).map(({description, path}, index) => {
          return (
            <li
              className="item"
              key={index}
            >
              <Link className="no-link" to={blogPath(path)}>
                {/* <img src={image} /> */}
                <span>{description}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
