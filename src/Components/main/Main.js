import React from 'react';
import data from '../../data';
import PhoneList from '../phoneList/PhoneList';

const Main = () => {
    return (
        <>
        <PhoneList phones={data.phones}/>
        </>
    )
}
export default Main;
