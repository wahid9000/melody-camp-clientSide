
import { NavLink } from 'react-router-dom';
import './RouteLink.css'

const RouteLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'active' : "inactive"
                }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default RouteLink;