import React from 'react'
import Heading from '../heading'

export default function ContactForm() {
    return (
        <section className="py-4">
                    <div className="col-lg-8 mx-auto">
                        <Heading heading="Contact Us" />
                        <form action="https://formspree.io/xzbpaloy" method="POST">
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="form-group">
                                <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="number" name="number" class="form-control" placeholder="Mobile" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="messege" class="form-control" placeholder="Messege" />
                            </div>
                            <button className="btn btn-info btn-block" type="submit">
                                Button
                            </button>
                        </form>
                    </div>
        </section>
    )
}
