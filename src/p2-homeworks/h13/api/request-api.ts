import axios from "axios";

export const requestAPI = {
    changeSuccess(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    },
}

