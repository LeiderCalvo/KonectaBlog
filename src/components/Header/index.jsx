import React from 'react'
import User from '../User'

import { Link, useLocation } from 'wouter'

import './index.scss'

export default function Header() {
    const location = useLocation()[0]
    const [isHidden, setHidden] = React.useState(false)

    const getClassName = path => location === `/${path}` ? 'selected' : ''

    React.useEffect(() => {
        setHidden(location === '/log')
    }, [location])

    if (isHidden) return null
    return (
        <header>
            <p className="logo">Konecta<br/>Blog</p>
            <nav>
                <Link href='/' className={getClassName('')}>Home</Link>
                <Link href='/poster' className={getClassName('poster')}>Crear Post</Link>
            </nav>
            <User />
        </header>
    )
}
