
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'activelink' : 'inactivelink'
                }
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;