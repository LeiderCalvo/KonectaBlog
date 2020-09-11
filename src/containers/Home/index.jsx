import React from 'react'
import ModalPortal from 'components/Modal'
import Auth from 'components/Auth'
import { useUser } from 'contexts/User'
import FireStore from 'services/FireStore'


import './index.scss'

export default function Home() {
    const user = useUser()
    const [posts, setPots] = React.useState(undefined)

    React.useEffect( _ => {
        const {data, unsuscribe} = FireStore.getAllPosts()
        setPots(data)
        return _ => unsuscribe()
    }, [])

    return <section className="Home">
        <ModalPortal show={!user}>
            <Auth />
        </ModalPortal>
    </section>
}