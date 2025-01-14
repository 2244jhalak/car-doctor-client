import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
       baseURL:'http://localhost:5000',
       withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate(); 
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },error=>{
            console.log('error track in the interceptor',error.response)
            if(error.response.status===401 || error.response.status===403){
                console.log('Logout the user');
                logOut()
                .then(()=>{
                   navigate('/login');
                })
                .catch(error=>console.log(error));
            }
        })
    },[logOut,navigate])
    return axiosSecure
};

export default useAxiosSecure;