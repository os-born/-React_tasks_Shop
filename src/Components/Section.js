import React from 'react'

const Section = ({children, title}) => {
    return (
        <section>
            <h2>{title.toUpperCase()}</h2>
            {children}
        </section>
    )
}

export default Section
