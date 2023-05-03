import axios from "axios";
import { API_DOMAIN } from '/config.js'


export default {
    // получить все подписки
    GET_SUBSCRIPTIONS_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/subscriptions/`, {
            method: "GET",
        })
            .then((cards) => {
                commit("SET_SUBSCRIPTIONS_TO_STATE", cards.data);
                return cards;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },

};