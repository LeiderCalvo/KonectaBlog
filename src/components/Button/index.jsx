import React, { useState } from 'react'

export default function Button({ children, classname, onClick, onValidate }) {
    const [error, errorSetter] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const handleclick = async () => {
        setDisabled(true)
        try {
            await onValidate && onValidate()
            let promise = await onClick()
            promise && promise.catch(error => errorSetter(error.message))
            errorSetter(null)
        } catch (error) {
            errorSetter(error.message)
        }
        setDisabled(false)
    }

    return (
        <div className={`buttonConter ${classname || ''}`}>
            <button
                disabled={disabled}
                className={error ? 'error' : ''}
                onClick={handleclick}
            >{children}</button>

            {error && <small><em>{error}</em></small>}
        </div>
    )
}