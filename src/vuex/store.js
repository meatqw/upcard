import { createStore } from "vuex";

import commotActions from "./actions/actions";
import apiRequestsCard from "./actions/api-requests-card";
import apiRequestsCompany from "./actions/api-requests-company";
import apiRequestsSocial from "./actions/api-requests-social";
import apiRequestsPortfolio from "./actions/api-requests-portfolio";


import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {
    ...apiRequestsCard,
    ...apiRequestsCompany,
    ...commotActions,
    ...apiRequestsSocial,
    ...apiRequestsPortfolio
}

export default createStore({
    state: {
        // список карт
        cards: [],
        // какая карточка выбрана
        selectedCard: {},
        // информация о компании карточки
        company: [],

        // social
        // выбранная социалка
        social: null,
        // данные о социалках
        socialData: null,
        // где в данный момент открыты настройки социалок
        socialPath: null,
        
        // портфолио 
        // текущий выбранный едемент портфолио
        selectedPortfolioItem: null,
        // список элементов портфолио
        portfolio: []
    },
    mutations,
    actions,
    getters
});