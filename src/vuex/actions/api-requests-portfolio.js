import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // получить все потфолио
    GET_PORTFOLIO_FROM_API({ commit }, cardID) {
        return axios(`${API_DOMAIN}/api/v1/portfolioByCard/${cardID}?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "GET",
        })
            .then((response) => {
                commit("SET_PORTFOLIO", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // обновить элемент порфолио
    UPDATE_PORTFOLIO_API({ commit }, portfolioItem) {

        const formData = new FormData();

        for (let key in portfolioItem) {
            formData.append(key, portfolioItem[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/portfolioUpdate/${portfolioItem.id}?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("UPDATE_PORTFOLIO", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить елмент порфолио
    POST_PORTFOLIO_API({ commit }, portfolioItem) {
        const formData = new FormData();

        for (let key in portfolioItem) {
            formData.append(key, portfolioItem[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/portfolio/?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("POST_PORTFOLIO", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};