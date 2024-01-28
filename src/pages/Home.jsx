import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'
import CardProduct from '../components/Home/CardProduct'
import '../pages/styles/home.css'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import Ofertas from '../components/Home/Ofertas'

const Home = () => {

    const [inputValue, setInputValue] = useState('')

    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const { productsGlobal } = useSelector(state => state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [])

    const input = useRef()

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase())
    }

    const productFilter = productsGlobal
        ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        .filter(prod => {
            const from = +fromTo.from
            const to = +fromTo.to
            const price = +prod.price
            if (from && to) {
                return from <= price && price <= to
            }
            if (from && !to) {
                return from <= price
            }
            if (!from && to) {
                return price <= to
            }
            if (!from && !to) {
                return true
            }
        })

    const [showFixedElement, setShowFixedElement] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 250) {
                setShowFixedElement(true);
            } else {
                setShowFixedElement(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='home'>
            <Ofertas />
            <div className='home-container'>
                {showFixedElement && <div className='home-filter'>
                    <div className='inputbox'>
                        <input required='required' ref={input} onChange={handleChangeInput} type="text" />
                        <span>Search</span>
                        <i></i>
                    </div>
                    <FilterCategory />
                    <FilterPrice setFromTo={setFromTo} />
                </div>}
                <div className='home-products'>
                    {
                        productFilter?.map(prod => (
                            <CardProduct
                                key={prod.id}
                                product={prod}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home