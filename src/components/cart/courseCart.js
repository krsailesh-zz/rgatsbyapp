import React, { Component } from 'react'
import Img from "gatsby-image"
import Heading from '../heading'

export default class CourseCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: props.Courses,
        }
    }
    render() {
        return (
            <section className="">
                <div className="container">
                    <Heading heading="Courses" />
                    <div className="row">
                        {this.state.courses.map(({ node }) => {
                            return (
                                <div key={node.id} className="col-11 col-md-6 mx-auto d-flex my-2">
                                    <Img fixed={node.image.fixed} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0"> {node.title} </h6>
                                            <h6 className="mb-0 text-success"> {node.price} </h6>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-muted">
                                                <small> {node.discription.discription} </small>
                                            </p>
                                            <button
                                                className="btn btn-info snipcart-add-item"
                                                data-item-id={node.id}
                                                data-item-name={node.title}
                                                data-item-price={node.price}
                                                data-item-url="https://jolly-bohr-4e55b0.netlify.com/"
                                            >
                                                Join now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

