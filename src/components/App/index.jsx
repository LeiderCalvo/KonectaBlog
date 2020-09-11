import React from 'react'
import Header from 'components/Header'
import Home from 'containers/Home'
import Log from 'containers/Log'
import { UserProvider } from 'contexts/User'
import { Router, Switch, Route } from 'wouter'
import PostCreator from 'containers/PostCreator'

export default function App() {
    return (
        <Router base="/Konecta-blog">
            <div className="App">
                <UserProvider>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/log" component={Log} />
                        <Route path="/poster" component={PostCreator} />
                    </Switch>
                </UserProvider>
            </div>
        </Router>
    )
}