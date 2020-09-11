import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import FireStore from 'services/FireStore'

import { useLocation } from 'wouter'

import './index.scss'

export default function PostCreator() {
    const [, setLocation] = useLocation()
    const [post, setPost] = React.useState({})

    const onValidateButton = () => {
        if (!post.hasOwnProperty('title') || !post.hasOwnProperty('category') || !post.hasOwnProperty('description') || !post.hasOwnProperty('body') || !post.hasOwnProperty('img'))
            throw new Error('Porfavor llene todos los campos')
    }

    const onSubmit = () => {
        FireStore.addPost(post)
        .then( _ => setLocation('/'))
    }

    return (
        <article className='PostCreator'>
            <h5>Añade tu propio post</h5>

            <section>
            <form onSubmit={evt => evt.preventDefault()}>

                <Input name='Titulo'
                    onChange={val => setPost({ ...post, title: val })}
                />

                <div className="inputConter">
                    <select name='Categoría' 
                        onChange={val => setPost({ ...post, category: val.target.value })}
                    >
                        <option hidden>Selecciona una categoria</option>
                        <option value="0" >Viaje</option>
                    </select>
                    <span>Categoría</span>
                </div>

                <Input name='Descripción'
                    onChange={val => setPost({ ...post, description: val })}
                />

                <Input name='Cuerpo del artículo'
                    onChange={val => setPost({ ...post, body: val })}
                />

                <Input name='Url de imagen'
                    onChange={val => setPost({ ...post, img: val })}
                />

                <Button
                    onClick={onSubmit}
                    onValidate={onValidateButton}
                >Crear Post</Button>
            </form>

            <img src="https://www.mimundotravel.com/blog/wp-content/uploads/2019/02/IMG-1172.jpg" alt="img"/>
            </section>

        </article>
    )
}