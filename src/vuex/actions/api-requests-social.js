import axios from "axios";
import { API_DOMAIN, getCookie } from '/config.js'

export default {
    // получить все социалки
    GET_SOCIAL_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/social/?token=${getCookie('token')}`, {
            method: "GET",
        })
            .then((response) => {
                commit("SET_SOCIAL", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // обновить социалки
    UPDATE_SOCIAL_API({ commit }, social) {

        const formData = new FormData();

        for (let key in social) {
            formData.append(key, social[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/socialUpdate/${social.id}/?token=${getCookie('token')}`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("UPDATE_SOCIAL", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить социалки
    POST_SOCIAL_API({ commit }, social) {
        const formData = new FormData();

        for (let key in social) {
            formData.append(key, social[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/social/?token=${getCookie('token')}`, {
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("POST_SOCIAL", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};