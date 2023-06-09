import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div>
                        <label htmlFor="my-drawer-2" className="btn btn-warning bg-amber-300 lg:hidden mt-4 ml-2"><FaBars></FaBars></label>
                    </div>
                    <div className="p-5">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#faf2de] text-base-content">
                        {
                            isAdmin ? (
                                <div>
                                    <li><h2 className="text-2xl font-bold mb-16">Admin Dashboard</h2></li>
                                    <li><Link to='/dashboard/manageClasses' className="text-xl font-semibold">Manage Classes</Link></li>
                                    <li><Link to='/dashboard/manageUsers' className="text-xl font-semibold">Manage Users</Link></li>
                                    <li><Link to='/'><button className="btn btn-warning w-full bg-amber-300 mt-3">Return To Home</button></Link></li>
                                </div>
                            ) : (
                                isInstructor ? (
                                    <div>
                                        <li><h2 className="text-2xl font-bold mb-16">Instructor Dashboard</h2></li>
                                        <li><Link to='/dashboard/addClass' className="text-xl font-semibold">Add A Class</Link></li>
                                        <li><Link to='/dashboard/myClass' className="text-xl font-semibold">My Classes</Link></li>
                                        <li><Link to='/'><button className="btn btn-warning w-full bg-amber-300 mt-3">Return To Home</button></Link></li>
                                    </div>
                                ) : (
                                    <div>
                                        <li><h2 className="text-2xl font-bold mb-16">Student Dashboard</h2></li>
                                        <li><Link to='/dashboard/mySelectedClass' className="text-xl font-semibold">My Selected Class</Link></li>
                                        <li><Link to='/dashboard/myEnrolledClass' className="text-xl font-semibold">My Enrolled Class</Link></li>
                                        <li><Link to='/'><button className="btn btn-warning w-full bg-amber-300 mt-3">Return To Home</button></Link></li>
                                    </div>
                                )
                            )

                        }
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;