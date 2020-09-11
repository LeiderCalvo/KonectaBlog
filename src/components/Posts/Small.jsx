import React from 'react'
import { Link } from 'wouter'
import useTimeAgo from 'hooks/useTimeAgo'

import './index.scss'

export default function Small({ post }) {
    const { title, category, description, img, slug, creationDate } = post
    const timeago = useTimeAgo(creationDate)

    return (

        <section className='small'>
            <img src={img} alt={title} />
            <h5>{title}</h5>
            <div>
                <span>Viajes</span>
                <small>{timeago}</small>
            </div>
            <p>{description}</p>
            <Link to={'/post/' + slug}>
                <button>Ver</button>
            </Link>
        </section>
    )
}