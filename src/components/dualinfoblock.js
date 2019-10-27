import React from 'react'
import {Link} from 'gatsby'

export default function dualinfoblock({title}) {
    return (
        <div className="my-4 our-team">
            <h2 className="my-4">
                {title}
            </h2>
            <div className="row container">
                <div className="col-8">
                    <p className="py-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officia ipsum repudiandae maiores, 
                        atque a mollitia ab dolorum aliquid eveniet sit aliquam ea suscipit voluptate eius ipsa ratione 
                        error excepturi, perferendis blanditiis molestias fuga, magnam adipisci. Dicta itaque illo eveniet 
                        voluptas quae, ipsum labore officiis veniam atque porro expedita asperiores blanditiis ipsam 
                        repellat veritatis necessitatibus, odit, nihil nisi quibusdam! Eveniet! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eligendi laborum ratione veritatis, aspernatur doloribus dolorem. 
                        Id et libero rerum! Dolore voluptatum sit impedit placeat, at voluptates harum vel dignissimos
                        sunt, animi eligendi doloremque ullam sed rerum? Non amet accusantium dicta voluptas placeat,
                        eveniet officia libero, quaerat impedit blanditiis distinctio recusandae. Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Quam porro, fugit itaque nostrum odit rerum quibusdam 
                        officiis a sapiente unde.
                    </p>
                </div>
            <div className="col-4">
                <div className="card ml-4 mb-4">
                    <img src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="image goes here"/>
                        <div className="card-body bg-dark text-light">
                            <h6 className="text-success">Click Photos</h6>
                            <p className="card-text text-center">Some quick example text to build on the card title and make up 
                            the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestiae minima hic, enim fugit cumque et quae voluptatum consequuntur recusandae? Consectetur?</p>
                            <button className="btn btn-info container">
                                {title}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
