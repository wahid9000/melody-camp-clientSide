import axios from "axios"
import { useContext } from "react"
import { useEffect } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: 'https://musical-server.vercel.app'
})



const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();


    useEffect(() => {
        axiosSecure.interceptors.request.use(request => {
            const token = localStorage.getItem('access-token');
            if (token) {
                request.headers.Authorization = `bearer ${token}`
            }
            return request
        })

        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut()
                    navigate('/signIn')
                }
            })
    }, [logOut, navigate])

    return [axiosSecure];
}

export default useAxiosSecure;