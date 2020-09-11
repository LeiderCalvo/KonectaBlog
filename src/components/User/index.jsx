import React from 'react'
import { ACTIONS, useUser, useUserDispatch } from 'contexts/User'
import { Link } from 'wouter'

import './index.scss'

export default function User() {
    const user = useUser()
    const userDispatch = useUserDispatch()

    const logout = _ => userDispatch({ type: ACTIONS.LOGGING_OUT })

    return user ?
        <div className='header__user'>
            <img
                className='header__user__img'
                src={`${process.env.PUBLIC_URL}/imgs/${ user.img? user.img : 'boy.png'}`}
                alt="user"
            />
            
            <section className='floating_user'>
                <div className="row">
                    <img
                        className='header__user__img'
                        src={`${process.env.PUBLIC_URL}/imgs/${ user.img? user.img : 'boy.png'}`}
                        alt="user"
                    />
                    <div>
                        <h6><strong>{user.name}</strong></h6>
                        <p>{user.email}</p>
                    </div>
                </div>
                <hr />
                <h6>Perfil de Conectir</h6>
                <h6>Ayuda</h6>
                <h6 onClick={logout}>Cerrar sesión</h6>
            </section>
        </div>
        :
        <Link to='/log'><button className='user_loging blue'>Loging</button></Link>
}