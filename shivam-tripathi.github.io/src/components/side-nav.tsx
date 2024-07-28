import './side-nav.css';
import { navigation, blogPath } from '../routes';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const MinimalSideNav = () => {
  return (
    <div style={{
      width: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '2rem',
    }}>
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
