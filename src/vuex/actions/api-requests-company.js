import axios from "axios";
import { API_DOMAIN, getCookie } from '/config.js'

export default {
    // обновить ифнормацию о компании
    UPDATE_COMPANY_API({ commit }, company) {

        const formData = new FormData();

        for (let key in company) {
            formData.append(key, company[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/companyUpdate/${company.id}?token=${getCookie('token')}`, {
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

        return axios(`${API_DOMAIN}/api/v1/company?token=${getCookie('token')}`, {
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