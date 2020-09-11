import React from 'react'
import ModalPortal from 'components/Modal'
import Auth from 'components/Auth'
import { useUser } from 'contexts/User'
import FireStore from 'services/FireStore'
import Small from 'components/Posts/Small'

import './index.scss'

export default function Home() {
    const user = useUser()
    const [posts, setPots] = React.useState([])

    React.useEffect(_ => {
        FireStore.getAllPosts()
            .then(data => setPots(data))
    }, [])

    return <section className="Home">
        <h3>Últimos artículos</h3>
        
        <div className="posts">
            { posts && posts.map(post => <Small post={post} key={post.id}/>) }
        </div>

        <ModalPortal show={!user}>
            <Auth />
        </ModalPortal>
    </section>
}