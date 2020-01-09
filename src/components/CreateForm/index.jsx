import React from 'react'
import './style.css'
function CreateForm(props) {
    return(
        <div className="create">
            {props.toggle ? (
                <div className="create-form">
                    <div className="create-form-line">
                        <label htmlFor="">계획 : </label>
                        <input className="create-form-input" type="text"/>
                    </div>
                    <div className="create-form-line">
                        <label htmlFor="">단위 : </label>
                        <input className="create-form-input" type="text"/>
                    </div>
                    <button className="create-form-button">제출</button>
                </div>
            ) :
            (
                <div className="nothing"></div>
            )}
        </div>
    )
}

export default CreateForm;