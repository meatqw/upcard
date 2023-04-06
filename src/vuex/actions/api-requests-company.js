import axios from "axios";
import { API_DOMAIN } from '/config.js'

export default {
    // обновить ифнормацию о компании
    UPDATE_COMPANY_API({ commit }, company) {

        const formData = new FormData();

        for (let key in company) {
            formData.append(key, company[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/companyUpdate/${company.id}?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("UPDATE_COMPANY", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить новую ифнормацию
    POST_COMPANY_API({ commit }, company) {
        const formData = new FormData();

        for (let key in company) {
            formData.append(key, company[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/company/?token=bm01wd-8ba97ec799c1950c4c12497a1569a9b3`, {
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("POST_COMPANY", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
};