import { navigation, blogPath } from '../routes';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import './side-nav.css';

const MinimalSideNav = () => {
  return (
    <div className="mini-side-nav">
      {
        navigation.map(({description, path, icon}, index) => {
          return (
            <Link
              className="no-link"
              to={blogPath(path)}
              key={index}
              style={{
                padding: '1rem',
              }}
              data-tooltip-id={path}
              data-tooltip-content={description}
              data-tooltip-place='right'
            >
              {icon}
              <Tooltip id={path} />
            </Link>
          );
      })}
    </div>
  );
}


export { MinimalSideNav };
