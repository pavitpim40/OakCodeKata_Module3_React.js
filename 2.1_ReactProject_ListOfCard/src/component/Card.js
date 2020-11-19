import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
        <img className="card-img-top"
             src={props.image} 
             alt="cap image" />
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
}
