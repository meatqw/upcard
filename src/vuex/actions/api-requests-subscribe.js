import axios from "axios";
import { API_DOMAIN, getCookie } from '/config.js'

export default {
    // добавить новуб карточку
    POST_SUBSCRIBE_API({ commit }, data) {
        const formData = new FormData();

        for (let key in data) {
            formData.append(key, data[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/subscribe?token=${getCookie('token')}`, {
            method: "POST",
            data: formData,
        })
            .then((response) => {
                commit("PAYMENT_URL", response.data.payment_url);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error.response.data;
            });
    },
    GET_SUBSCRIBE_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/subscribe?token=${getCookie('token')}`, {
            method: "GET",
        })
            .then((response) => {
                commit("SUBSCRIBE", response.data);
                return response.data;
            })
            .catch((error) => {
                return error.response.data;
            });
    }
};