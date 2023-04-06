import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить все карточки
    GET_CARDS_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/v1/card?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "GET",
        })
            .then((cards) => {
                commit("SET_CARDS_TO_STATE", cards.data);
                return cards;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // обновить ифнормацию о карточке
    UPDATE_CARD_API({ commit }, card) {

        const formData = new FormData();

        for (let key in card) {
            formData.append(key, card[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/cardUpdate/${card.id}?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("UPDATE_CARD", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить новуб карточку
    POST_CARD_API({ commit }, card) {
        const formData = new FormData();

        for (let key in card) {
            formData.append(key, card[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/card/?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("POST_CARD", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};