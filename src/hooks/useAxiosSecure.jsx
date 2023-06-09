import axios from "axios"
import { useContext } from "react"
import { useEffect } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useNavigate } from "react-router-dom"

const useAxiosSecure = () => {
    const{ logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })

    useEffect( () => {
        axiosSecure.interceptors.request.use(request => {
            const token = localStorage.getItem('access-token');
            if(token){
                request.headers.Authorization = `bearer ${token}`
            }
            return request
        })

        axiosSecure.interceptors.response.use(response => response, async(error) => {
            console.log(error);
            if(error.response && (error.response.status === 401 || error.response.status === 403)){
                await logOut()
                navigate('/signIn')
            }
            return Promise.reject(error);
        })
    } , [logOut, navigate, axiosSecure])

    return [axiosSecure];
}

export default useAxiosSecure;