import React, { useState, useEffect } from 'react'

export default function Input({ name, initValue, placeholder, type, onValidate, onChange }) {
    const [val, valSetter] = useState(initValue || '')
    const [hint, hintSetter] = useState(placeholder)
    const [error, errorSetter] = useState(null)

    const onValidateTel = val => {
        if (val.includes(' ')) throw new Error('Por favor no use espacios')
        if (val.length < 8) throw new Error('El número está incompleto')
        if (isNaN(val)) throw new Error('No es un número, no use signos')
    }

    const onValidateEmail = val => {
        if (val.includes(' ')) throw new Error('Por favor no use espacios')
        if (!val.includes('@') || !val.includes('.')) throw new Error('El formato es incorrecto')
    }

    const onValidatePassword = val => {
        if (val.includes(' ')) throw new Error('Por favor no use espacios')
        if (val.length < 8) throw new Error('Porfavor use más de 8 caracteres')
    }

    const applyValidation = val => {
        if (type === 'email') onValidateEmail(val)
        if (type === 'password') onValidatePassword(val)
        if (type === 'tel') onValidateTel(val)
        onValidate && onValidate(val)
    }

    const handlechange = e => {
        let val = e.target.value
        try {
            valSetter(val)
            if (val === '') throw new Error('El campo está vacío')
            applyValidation(val)
            errorSetter(null)
            onChange(val)
        } catch (error) {
            errorSetter(error.message)
        }
    }

    useEffect(() => {
        if (type === 'password')
            hintSetter('La contraseña debe tener un mínimo de 8 caracteres y debe contener números y letras')
        if (type === 'tel')
            hintSetter('El númeo de telefono movil o celular no debe contener signos o espacios')
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="inputConter">
            <input
                required
                value={val}
                className={error ? 'error' : ''}
                pattern=".*\S.*"
                onChange={handlechange}
                type={type && type !== 'email' ? type : 'text'}
            />
            <span>{name}</span>

            {error ? <small><em>{error}</em></small>
                : hint ? <p><em>{hint}</em></p>
                    : null
            }
        </div>
    )
}