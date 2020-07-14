import React from 'react'

const Row = ({year, totalReturn, cumulativeReturn}) => {
    const color = totalReturn < 0 ? 'red' : 'inherit'
    return (
        <tr>
            <td>{year}</td>
            <td style={{color}}>{totalReturn}</td>
            <td>{cumulativeReturn}</td>
        </tr>
    )
}

export default Row
