import React from 'react'

const Banner = ({title, subtitle, children}) => {
    return (
        <div className="banner">
            <h3>{title}</h3>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;
