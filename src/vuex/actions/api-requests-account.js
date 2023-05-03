import axios from "axios";
import { API_DOMAIN, getCookie } from '/config.js'


export default {
    // получить пользщователя
    GET_ACCOUNT_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/account/?token=${getCookie('token')}`, {
            method: "GET",
        })
            .then((account) => {
                commit("SET_ACCOUNT_TO_STATE", account.data);
                return account;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // обновить данные пользщователя (подписка)
    UPDATE_ACCOUNT_API({ commit }, data) {

        const formData = new FormData();

        for (let key in data) {
            formData.append(key, data[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/account/?token=${getCookie('token')}`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("SET_ACCOUNT_TO_STATE", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};