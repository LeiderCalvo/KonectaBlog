import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'

import FireAuth from 'services/FireAuth'
import { Facebook, Google } from 'icons/icons'
import { ACTIONS, useUserDispatch } from 'contexts/User'

import './index.scss'

export default function Auth({ isreg = false }) {
    const userDispatch = useUserDispatch()
    const [isReg, setLoging] = React.useState(isreg)
    const [user, setUser] = React.useState({})

    const changeLogingType = () => setLoging(!isReg)

    const onValidateButton = () => {
        if (isReg) {
            if (!user.hasOwnProperty('name') || !user.hasOwnProperty('cel'))
                throw new Error('Porfavor llene todos los campos')
        }

        if (!user.hasOwnProperty('email') || !user.hasOwnProperty('password'))
            throw new Error('Porfavor llene todos los campos')
    }
    //add Loading, con templates
    const onSubmit = () => {
        FireAuth.Login(user, isReg)
            .then(e => {
                console.log(e)
                const { uid, displayName, phoneNumber, email } = e.user
                userDispatch({
                    type: ACTIONS.LOGGING,
                    value: {
                        uid,
                        name: displayName,
                        email,
                        cel: phoneNumber || null
                    }
                })
            })
    }

    let welcomMessaje = isReg
        ? 'Únete a los millones de personas que apoyan '
        : 'Bienvenido, y gracias por apoyar '

    return (
        <article className='loging'>
            <h5>{welcomMessaje} el turismo colombiano</h5>
            <p>Inicia sesión con tus redes sociales</p>

            <div className='socialMediaBtns'>
                <Button
                    onClick={FireAuth.logingWithGoogle}
                    classname='google'>
                    <Google />
                        GOOGLE
                </Button>

                <Button
                    onClick={FireAuth.logingWithFacebook}
                    classname='facebook'>
                    <Facebook width="10.9" height="20" fill='#fff' />
                        FACEBOOK
                </Button>
            </div>

            <p>ó</p>

            <form onSubmit={evt => evt.preventDefault()}>
                {isReg &&
                    <Input
                        name='Nombre Completo'
                        onChange={val => setUser({ ...user, name: val })}
                    />}
                <Input
                    name='Correo'
                    type='email'
                    onChange={val => setUser({ ...user, email: val })}
                />
                <Input
                    name='Contraseña'
                    type='password'
                    onChange={val => setUser({ ...user, password: val })}
                />

                {
                    isReg &&
                    <Input
                        name='Número movil'
                        type='text'
                        onChange={val => setUser({ ...user, cel: val })}
                    />
                }

                <Button
                    onClick={onSubmit}
                    onValidate={onValidateButton}
                >{isReg ? 'SING UP' : 'LOG IN'}</Button>
            </form>

            <small className='changer'
                onClick={changeLogingType}
            >{isReg ? 'Ya tengo cuenta' : 'Necesito registrarme'}</small>

        </article>
    )
}