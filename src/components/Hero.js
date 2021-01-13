import React from 'react'

const Hero = ({hero, children}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
   
}
// incase if we forget to send hero props then this will be the default 
Hero.defaultProps = {
    hero:'defaultHero'
}
export default Hero;

