import React from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({setFromTo}) => {

    const {reset, register, handleSubmit} = useForm()

    const submit = data => {
        setFromTo(data)
        reset({
            from:'',
            to:''
        })
    }
  return (
    <article className='category-price'>
        <h3 className='price-title'>Price</h3>
        <form onSubmit={handleSubmit(submit)}>
            <div className='inputbox price-input'>
                <label htmlFor="from"></label>
                <input {...register('from')} type="number" id='from'required='required'/>
                <span>From</span>
                <i></i>
            </div>
            <div className='inputbox price-input'>
                <label htmlFor="to"></label>
                <input {...register('to')} type="to" id='to' required='required'/>
                <span>To</span>
                <i></i>
            </div>
            <button className='price-btn'>Filter Price</button>
        </form>
    </article>
  )
}

export default FilterPrice