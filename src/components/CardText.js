import React from 'react'
import './CardText.css'
import { Link } from 'react-router-dom'

export default function CardText({imagelink,imagestyle,title,description,buttonlink}) {
    return (
        <>
            <div class="card custom-card">
                <img src={imagelink} style={imagestyle} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={buttonlink} class="card-button mt-5">Prepare Now</Link>
                    </div>
            </div>
        </>
    )
}
