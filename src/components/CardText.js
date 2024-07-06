import React from 'react'
import './CardText.css'
import { Link } from 'react-router-dom'

export default function CardText({imagelink,imagestyle,title,description,buttonlink}) {
    return (
        <>
            <div className="card custom-card">
                <img src={imagelink} style={imagestyle} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={buttonlink} className="card-button mt-5">Prepare Now</Link>
                    </div>
            </div>
        </>
    )
}
