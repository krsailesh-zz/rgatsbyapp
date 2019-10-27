import React from 'react'
import Heading from './heading'

export default function Infoblock({title}) {
    return (
        <div className="my-4 about-us">
            <div>
                <Heading heading={title} />
            </div>
            <div className="container col-8">
                <p className="pb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officia ipsum repudiandae maiores, 
                    atque a mollitia ab dolorum aliquid eveniet sit aliquam ea suscipit voluptate eius ipsa ratione 
                    error excepturi, perferendis blanditiis molestias fuga, magnam adipisci. Dicta itaque illo eveniet 
                    voluptas quae, ipsum labore officiis veniam atque porro expedita asperiores blanditiis ipsam 
                    repellat veritatis necessitatibus, odit, nihil nisi quibusdam! Eveniet!
                </p>
                <button className="btn btn-info mb-4">
                    {title}
                </button>
            </div>
        </div>
    )
}
