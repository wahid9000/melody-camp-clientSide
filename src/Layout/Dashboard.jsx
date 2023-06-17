import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import RouteLink from "../Components/DashboardRouteLink/RouteLink";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div>
            <div className="drawer lg:drawer-open font-primary">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div>
                        <label htmlFor="my-drawer-2" className="btn btn-primary bg-blue-950 lg:hidden mt-4 ml-2"><FaBars className="text-white"></FaBars></label>
                    </div>
                    <div className="p-5">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <Outlet></Outlet>
                        </motion.div>

                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu pt-6 w-72 h-full bg-blue-950 text-base-content">
                        {
                            isAdmin ? (
                                <div>

                                    <Slide>
                                        <div className="space-y-5">
                                            <li><h2 className="text-2xl font-bold text-white"> Admin Dashboard</h2></li>
                                            <div className="divider bg-white h-1"></div>
                                            <li><RouteLink to='/dashboard/manageClasses' className="text-xl font-semibold text-slate-50"><p className="mt-4">Manage Classes</p></RouteLink></li>
                                            <li><RouteLink to='/dashboard/manageUsers' className="text-xl font-semibold">Manage Users</RouteLink></li>
                                            <li><RouteLink to='/'><button className="btn btn-primary text-black w-full bg-white mt-3">Return To Home</button></RouteLink></li>
                                        </div></Slide>


                                </div>

                            ) : (
                                isInstructor ? (
                                    <div>
                                        <Slide>
                                            <div className="space-y-5">
                                                <li><h2 className="text-2xl font-bold text-white">Instructor Dashboard</h2></li>
                                                <div className="divider bg-white h-1"></div>
                                                <li><RouteLink to='/dashboard/addClass' className="text-xl font-semibold"><p className="mt-4">Add A Class</p></RouteLink></li>
                                                <li><RouteLink to='/dashboard/myClass' className="text-xl font-semibold">My Classes</RouteLink></li>
                                                <li><Link to='/'><button className="btn btn-primary text-black w-full bg-white mt-3">Return To Home</button></Link></li>
                                            </div>
                                        </Slide>
                                    </div>
                                ) : (
                                    <div>
                                        <Slide>
                                            <div className="space-y-5">
                                                <li><h2 className="text-2xl font-bold text-white">Student Dashboard</h2></li>
                                                <div className="divider bg-white h-1"></div>
                                                <li><RouteLink to='/dashboard/mySelectedClass' className="text-xl font-semibold"><p className="mt-4">My Selected Class</p></RouteLink></li>
                                                <li><RouteLink to='/dashboard/myEnrolledClass' className="text-xl font-semibold">My Enrolled Class</RouteLink></li>
                                                <li><RouteLink to='/dashboard/paymentHistory' className="text-xl font-semibold">My Payment History</RouteLink></li>
                                                <li><RouteLink to='/'><button className="btn btn-primary text-black w-full bg-white mt-3">Return To Home</button></RouteLink></li>
                                            </div>
                                        </Slide>
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