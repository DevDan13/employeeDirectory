import React from 'react'

export default function Table(props) {

    console.log(props.displayTable)

    const tableHeadDisplay = props.tableCellHeaders.map( (tableHead, i) => {
        console.log(tableHead);
        return <th key={i}>{tableHead}</th>;
    })

    const displayData = props.displayTable.map( (data, i) => {
        console.log(data);
        return(
             <tr key={i}>
                 <td>{data.name.first}</td>
                 <td>{data.name.last}</td>
                 <td>{data.email}</td>
                 <td>{data.cell}</td>

             </tr>
             
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    {tableHeadDisplay}

                </tr>
            </thead>

            <tbody>
                    {displayData}
            </tbody>            
        </table>
    )
}
