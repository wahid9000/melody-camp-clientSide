import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    
    useEffect( () => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    } , [theme])


    const handleToggle = (event) => {
        if(event.target.checked){
            setTheme('dark');
        } else{
            setTheme('light');
        }
    }



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
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
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
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                    {
                        user && <li><Link to={isAdmin ? '/dashboard/manageClasses' : (isInstructor ? '/dashboard/addClass' : '/dashboard/mySelectedClass')}>Dashboard</Link></li>
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
                <label className="swap swap-rotate">

                    <input type="checkbox" onChange={handleToggle} />

                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
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