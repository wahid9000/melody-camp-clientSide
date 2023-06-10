import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/StudentDashboard/EnrolledClass";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import AddClass from "../Pages/InstructorDashboard/AddClass";
import MyClass from "../Pages/InstructorDashboard/MyClass";
import SendFeedback from "../Pages/Dashboard/AdminDashboard/SendFeedback";
import UpdateClass from "../Pages/InstructorDashboard/UpdateClass";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,

        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,

        children: [
            //users dashboard
            {
                path: 'mySelectedClass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'myEnrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`http://localhost:5000/mySelectedClass/${params.id}`)
            },

            //admin dashboard
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'sendFeedback/:id',
                element: <SendFeedback></SendFeedback>,
                loader: ({params})=> fetch(`http://localhost:5000/classes/${params.id}`)
            },

            //instructor dashboard
            {
                path: 'addClass',
                element:<AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'updateClass/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({params})=> fetch(`http://localhost:5000/classes/${params.id}`)

            }
        ]
    }
])

export default router;