import axios from "axios";
import { API_DOMAIN } from '/config.js'


export default {
    // получить все карточки
    GET_CHECK_TOKEN_FROM_API({ commit }, token) {
        return axios(`${API_DOMAIN}/api/v1/tokenCheck/`, {
            method: "POST",
            data: {'token': token }
        })
            .then((status) => {
                commit("SET_TOKEN_STATUS_TO_STATE", status.data);
                return status;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};