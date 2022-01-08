import {UserType} from "../HW8";


type ActionType = {
    type: 'sort' | 'check'
    payload: string | number
    sort?: 'name' | 'age'
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    const newState = [...state];
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                if (action.sort === 'name') {
                    newState.sort((a, b) => a.name > b.name ? 1 : -1);
                } else if (action.sort === 'age') {
                    newState.sort((a, b) => a.age - b.age);
                }
            } else if (action.payload === 'down') {
                if (action.sort === 'name') {
                    newState.sort((a, b) => a.name < b.name ? 1 : -1);
                } else if (action.sort === 'age') {
                    newState.sort((a, b) => b.age - a.age);
                }
            }
            return newState;
        }
        case 'check': {
            return newState.filter((f) => f.age >= action.payload);
        }
        default:
            return state
    }
}
