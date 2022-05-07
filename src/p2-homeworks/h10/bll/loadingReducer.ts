const CHANGE_LOADING_STATUS = 'CHANGE_LOADING_STATUS';

const initState = {
    isLoading: false
}
type StateType = typeof initState;
type ActionType = ReturnType<typeof loadingAC>
export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingType = (isLoading: boolean) => {
    type: 'CHANGE_LOADING_STATUS'
    isLoading: boolean
}
export const loadingAC: LoadingType = (isLoading) => ({type: CHANGE_LOADING_STATUS, isLoading} as const);