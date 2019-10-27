import React from 'react'

import BackgroundImage from 'gatsby-background-image'

export default function Hero({heroClass,img,title,subtitle}) {
    return (
        <BackgroundImage className={heroClass} fluid={img}>
            <h1 className="text-light"> {title} </h1>
            <h5 className="text-light"> {subtitle} </h5>
        </BackgroundImage>
    )
}



