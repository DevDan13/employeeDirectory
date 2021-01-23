import React from 'react'

export default function Search(props) {
    //console.log("props", props);
    return (
        <input type="text" 
        value={props.search} 
        onChange={(e) => {
            props.setSearch(e.target.value);
        }} />
    )
}
