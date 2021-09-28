import React from 'react'
import LaptopListItem from '../laptopListItem/LaptopListItem'

const LaptopList = ({laptops}) => {
    return (
        <ul>
            {laptops.map((laptop) => (<LaptopListItem laptop={laptop} key={laptop.id}/>))}
        </ul>
    )
}
export default LaptopList
