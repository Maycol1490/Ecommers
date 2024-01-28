import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"


const usePurchases = () => {
    
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    const [purchases, setpurchases] = useState()
    const dispatch = useDispatch()

    const buyThisCart = () =>{
        axios.post(url,{}, getConfigToken())
        .then(res=>{
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        } )
        .catch(err=>console.log(err))
    }

    const getAllProductsPurchases = () =>{
        axios.get(url,getConfigToken())
        .then(res => setpurchases(res.data))
        .catch(err=>console.log(err))

    }

    return {purchases,getAllProductsPurchases, buyThisCart }


}



export default usePurchases