import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        Swal.fire({
            title: 'Log Out?',
            text: "You will be redirected to the Login page!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log Out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut();
                navigate('/signIn')
                Swal.fire(
                    'LogOut Successful!',
                    'User has been logged out.',
                    'success'
                )
            }
        })

    }

    return (
        <div className="navbar bg-[#faf2de] lg:px-28 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white mt-3 p-2 shadow z-40 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        {
                            user && <li><Link>Dashboard</Link></li>
                        }
                        {
                            user &&
                            <button onClick={handleLogOut} className="ml-2 btn btn-warning bg-amber-300">Logout</button>
                        }
                    </ul>
                </div>
                <img src="logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex mr-12">
                <ul className="menu space-x-6 menu-horizontal px-1 text-xl font-semibold">
                    <li><Link>Home</Link></li>
                    <li><Link>Instructors</Link></li>
                    <li><Link>Classes</Link></li>
                    {
                        user && <li><Link>Dashboard</Link></li>
                    }
                    {
                        user ?

                            <div className="flex justify-center items-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <button onClick={handleLogOut} className="ml-2 btn btn-warning bg-amber-300">Logout</button>
                            </div>

                            :
                            <Link to='/signIn'><button className="btn font-bold btn-warning bg-amber-300">Sign In</button></Link>
                    }
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                {
                    user ?
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        :
                        <Link to='/signIn'><button className="btn font-bold btn-warning bg-amber-300">Sign In</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;