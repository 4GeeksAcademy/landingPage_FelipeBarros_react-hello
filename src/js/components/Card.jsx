import React from "react"

function Card(props) {

    return (
        <>
            <div className="card col-3 m-3 p-0" style={{ width: "18rem" }}>
                <img src={props.url} className="card-img-top w-100 h-100 " alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos vel consectetur tempora aliquid enim, voluptatum dolore fugiat officiis velit vero id architecto libero. Quia, recusandae praesentium? Quibusdam ex qui deserunt.
                    </p>
                    <a href="#" className="btn btn-primary">
                    Find Out More
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card;