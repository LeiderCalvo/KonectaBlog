import makeStore from './makeStore'

export const USER_STATES = {
    UNLOGGED: null,
    UNKNOW: undefined
}

export const INITIAL_STATE = USER_STATES.UNKNOW

export const ACTIONS = {
    LOGGING: 0,
    LOGGING_OUT: 1,
    SIGNING: 2
}

const userReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOGGING:
            return {...action.value}

        case ACTIONS.SIGNING:
            return {...action.value}

        case ACTIONS.LOGGING_OUT:
            return USER_STATES.UNLOGGED

        default:
            throw new Error('unKnown action¡', action)
    }
}

const [
    UserProvider,
    useUser,
    useUserDispatch
] = makeStore({
    initialState: INITIAL_STATE,
    guivenReducer: userReducer,
    key: 'userStore'
})

export { UserProvider, useUser, useUserDispatch }