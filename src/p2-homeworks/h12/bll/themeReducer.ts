const CHANGE_THEME = 'CHANGE_THEME';

const initState = {
    theme: 'dark',
};
type StateType = typeof initState;
type ActionType = ReturnType<typeof changeThemeAC>
export const themeReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};
type changeThemeType = (payload: { theme: string }) => {
    type: 'CHANGE_THEME'
    payload: {
        theme: string
    }
}

export const changeThemeAC: changeThemeType = (payload) => ({type: CHANGE_THEME, payload} as const);