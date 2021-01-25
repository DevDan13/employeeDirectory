import React from 'react'
import "./style.css"

export default function Sort(props) {
    return (
        <button 
        className="btn btn-dark"
        type="submit"
        onClick={props.sort}>
            Sort Employees
        </button>
    )
}
