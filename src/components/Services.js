import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa'

class Services extends Component  {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktail",
                info: "Get Free Cocktail as welcome "

            },

            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Note that the development build is not optimized.To create a production build, use npm run build. "

            },
            {
                icon: <FaShuttleVan />,
                title: "Free Drive",
                info: "Note that the development build is not optimizedTo create a production build, use npm run build."

            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info: "Note that the development build is not optimized To create a production build, use npm run build."

            }
        ]
    }
    render(){
        return (
            <section className="services">
                <div className="section-title">
                    <h4>Services</h4>
                    <div></div>
                </div>
                <div className="services-center">
                   { this.state.services.map((item, index) => {
                    return(
                        <article className="service" key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )

                    }) }
    
                </div>
            </section>
         )
    }
  
   
}

export default Services;
