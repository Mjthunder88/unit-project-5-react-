import React from 'react'

import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {

    const currentDisplay = useSelector(selectDisplay)
    console.log(currentDisplay)
    return (
        <div className='stack'>
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.common}</h2>
            <div>{currentDisplay.flag}</div>
            <table className='overview-table'>
                <tr>
                    <td>Population: </td>
                    <td> {currentDisplay.population}</td>
                </tr>
                <tr>
                    <td>Capital: </td>
                    <td>{currentDisplay.capital}</td>
                </tr>
                <tr>
                    <td>Region: </td>
                    <td>{currentDisplay.region}</td>
                </tr>
                <tr>
                    <td>Map: </td>
                    <td>{currentDisplay.maps.googleMaps}</td>
                </tr>
            </table>
        </div>
    )
}

export default Overview