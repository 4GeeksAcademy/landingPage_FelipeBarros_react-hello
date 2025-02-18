import React from "react"

function Jumbotron() {

    return (
        <>
            <section className="py-5 container bg-secondary">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light ">A Warm Welcome!</h1>
                        <p className="lead">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod minima debitis nemo corrupti cumque eum odio soluta assumenda quidem aut.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">
                            Call to action
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jumbotron;