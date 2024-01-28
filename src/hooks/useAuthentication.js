import axios from "axios"
import { useState } from "react";

const useAuthentication = () => {


    const [errorModalOpen, setErrorModalOpen] = useState(false);


    const createNewUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url,data)
        .then(res=> console.log(res.data))
        .catch(err => {
            console.log(err)
            setErrorModalOpen(true);
        })
    }

    const loginUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url,data)
        .then(res =>{
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
        })
        .catch(err =>{ console.log(err)
        localStorage.removeItem('token')
        setErrorModalOpen(true);
        })
        
    }
console.log(errorModalOpen)

    return { createNewUser , loginUser, errorModalOpen, setErrorModalOpen}

}

export default useAuthentication