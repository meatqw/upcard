import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить все социалки
    GET_SOCIAL_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/social?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
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
        return axios(`${API_DOMAIN}/api/v1/socialUpdate/${social.id}?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
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

        return axios(`${API_DOMAIN}/api/v1/social/?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
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