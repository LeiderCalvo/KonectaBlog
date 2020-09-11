import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

export function Close(props) {
    return (
        <svg className='close' width={0} height={0} viewBox="0 0 15 15" fill='none' {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 6.414L1.707 9.707.293 8.293 3.586 5 .293 1.707 1.707.293 5 3.586 8.293.293l1.414 1.414L6.414 5l3.293 3.293-1.414 1.414L5 6.414z"
            />
        </svg>
    )
}

function Modal({ show, onclose, children }) {
    return !show ? null :
        <article className='Modal'>
            <section>
                {onclose && <Close onClick={onclose} />}
                {children}
            </section>
        </article>
}

export default function ModalPortal({ show, onclose, children }) {
    return ReactDOM.createPortal(
        <Modal show={show} onclose={onclose} >
            {children}
        </Modal>,
        document.getElementById('root')
    )
}