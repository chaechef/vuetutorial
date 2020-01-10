import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
function CreateForm(props) {
    const [plan, planSet] = useState("")
    const [unit, unitSet] = useState("")
    function planHandleChange(e){
        planSet(e.target.value)
    }
    function unitHandleChange(e){
        unitSet(e.target.value)
    }
    function handleClick(e){
        axios.post('http://localhost:8000/todos/', {
            name: plan,
            unit: unit,
            sum: 0,
            startDate: new Date()
        })
        .then(res => {
            props.setisToggleOn(false)
            window.location.reload(0)
        }
        )
    }
    return(
        <div className="create">
            {props.toggle ? (
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