import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
const CreateForm = ({toggle,setisToggleOn, todos, todosSet}) => {
    const [plan, planSet] = useState("")
    const [unit, unitSet] = useState("")

    const planHandleChange = (e) => {
        planSet(e.target.value)
    }

    const unitHandleChange = (e) =>{
        unitSet(e.target.value)
    }

    const handleClick = (e) =>{
        const newTodo = {
            name: plan,
            unit: unit,
            sum: 0,
            startDate: new Date()
        }
        axios.post('http://localhost:8000/todos/', {
            ...newTodo
        })
        .then(res => {
            const newTodos = [...todos, res.data]
            setisToggleOn(false)
            todosSet(newTodos)
            planSet("")
            unitSet("")
        })
    }

    return(
        <div className="create">
            {toggle ? (
                <div className="create-form">
                    <ul className="create-form-line">
                        <li><label>plan </label>
                        <span className="required">*</span>
                        <input className="create-form-input" type="text" value={plan} onChange={planHandleChange}/>
                        </li>

                        <li>
                        <label>unit </label>
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