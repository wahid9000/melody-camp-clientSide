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
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,

        errorElement: <ErrorPage></ErrorPage>,

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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

        children: [
            //users dashboard
            {
                path: 'mySelectedClass',
                element: <PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
            },
            {
                path: 'myEnrolledClass',
                element: <PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params})=> fetch(`https://musical-server.vercel.app/mySelectedClass/${params.id}`)
            },
            {
                path:'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            },

            //admin dashboard
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'sendFeedback/:id',
                element: <SendFeedback></SendFeedback>,
                loader: ({params})=> fetch(`https://musical-server.vercel.app/classes/${params.id}`)
            },

            //instructor dashboard
            {
                path: 'addClass',
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myClass',
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
                loader: ({params})=> fetch(`https://musical-server.vercel.app/classes/${params.id}`)

            }
        ]
    }
])

export default router;