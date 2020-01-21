import React, { useState, useContext } from 'react'
import './style.css'
import axios from 'axios'
import { TodoContext, ToggleContext } from '../../App'
const CreateForm = () => {

    const {todos, setTodos} = useContext(TodoContext)
    const {isToggleOn,setisToggleOn} = useContext(ToggleContext)
    const {plan, planSet} = useContext(ToggleContext)
    const {unit, unitSet} = useContext(ToggleContext)


    const planHandleChange = (e) => {
        planSet(e.target.value)
    }

    const unitHandleChange = (e) =>{
        unitSet(e.target.value)
    }

    const handleClick = (e) =>{
        const today = new Date()
        const yester = new Date(today.setDate(today.getDate()-1))
        const newTodo = {
            name: plan,
            unit: unit,
            sum: 0,
            startDate: today,
            updateDate: yester ,
        }
        axios.post('http://localhost:8000/todos/', {
            ...newTodo
        })
        .then(res => {
            const newTodos = [...todos, res.data]
            setisToggleOn(false)
            setTodos(newTodos)
            planSet("")
            unitSet("")
        })
    }

    return(
        <div className="create">
            {isToggleOn ? (
                <div className="create-form">
                    <ul className="create-form-line">
                        <li><label>plan </label>
                        <span className="required">*</span>
                        <input className="create-form-input" type="text" value={plan} onChange={planHandleChange}/>
                        </li>

                        <li>
                        <label>one day </label>
                        <span className="required">*</span>
                        <input className="create-form-input" type="text" value={unit} onChange={unitHandleChange}/>

                        </li>
                        <li>
                        <button className="create-form-button" onClick={handleClick}>제출</button>

                        </li>
                    </ul>

                </div>
            ) :
            (
                <div className="nothing"></div>
            )}
        </div>
    )
}

export default CreateForm;