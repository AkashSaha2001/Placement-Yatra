//Image
//button

import React from 'react'
import './ImageCard.css'
import { Link } from 'react-router-dom'

export default function ImageCard({imagelink,link,buttontext}) {
    return (
        <>
            <div className="card custom-card h-100">
                <img src={imagelink} className="card-img-top"
                    alt="Articles" />
                <div className="card-body custom-card-body">
                    <Link to={link} className="card-button mt-5">{buttontext}</Link>
                </div>
            </div>
        </>
    )
}
