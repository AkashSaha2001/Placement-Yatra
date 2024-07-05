// normal card
//title
//description
//button

import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

export default function card({title,description,link,linktitle}) {
    return (
        <div>
            <div className="card custom-card" style={{ height: '15rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={link} className="card-button mt-5">{linktitle}</Link>
                </div>
            </div>
        </div>
    )
}
