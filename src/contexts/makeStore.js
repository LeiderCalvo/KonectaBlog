import React from 'react'

export default function makeStore({ initialState, guivenReducer, key }) {
    const dispatchContext = React.createContext()
    const storeContext = React.createContext()
    let reducer = guivenReducer

    if (key) {
        try {
            initialState = JSON.parse(localStorage.getItem(key)) || initialState || null
        } catch { }

        reducer = (state, action) => {
            const newState = guivenReducer(state, action)
            localStorage.setItem(key, JSON.stringify(newState))
            return newState
        }
    }

    const StoreProvider = ({ children }) => {
        const [computers, dispatch] = React.useReducer(reducer, initialState)

        return (
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={computers}>
                    {children}
                </storeContext.Provider>
            </dispatchContext.Provider>
        )
    }

    function useDispatch() {
        return React.useContext(dispatchContext)
    }

    function useStore() {
        return React.useContext(storeContext)
    }

    return [StoreProvider, useStore, useDispatch]
}