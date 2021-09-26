import React from 'react'
import data from '../../data';

const HeaderList = () => {
    return (
        <ul>
            {data.header.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default HeaderList;
