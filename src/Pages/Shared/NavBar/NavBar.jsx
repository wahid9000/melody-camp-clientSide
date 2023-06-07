import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-[#faf2de] lg:px-28 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <img src="logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex mr-12">
                <ul className="menu space-x-6 menu-horizontal px-1 text-xl font-semibold">
                    <li><Link>Home</Link></li>
                    <li><Link>Instructors</Link></li>
                    <li><Link>Classes</Link></li>
                    <li><Link>Dashboard</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <a className="btn btn-warning">Login</a>
            </div>
        </div>
    );
};

export default NavBar;