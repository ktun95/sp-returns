import React from 'react'

const Row = ({year, totalReturn, cumulativeReturn}) => {

    return (
        <tr>
            <td>{year}</td>
            <td>{totalReturn}</td>
            <td>{cumulativeReturn || '-' }</td>
        </tr>
    )
}

export default Row
