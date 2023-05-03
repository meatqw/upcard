export default {
    SELECT_CARD({ commit }, card) {
        commit("SET_SELECTED_CARD", card);
    },
    // social
    SET_SOCIAL({ commit }, social) {
        commit("SET_SELECTED_SOCIAL", social);
    },
    SET_SOCIAL_DATA({ commit }, socialData) {
        commit("UPDATE_SOCIAL", socialData);
    },
    SET_SOCIAL_PATH({ commit }, socialPath) {
        commit("UPDATE_SOCIAL_PATH", socialPath);
    },
    // portfolio
    SELECT_PORTFOLIO_ITEM({ commit }, portfolioItem) {
        commit("SET_SELECTED_PORTFOLIO_ITEM", portfolioItem);
    },
    SET_DELETE_DATA({ commit }, deleteData) {
        commit("SET_DELETE_DATA", deleteData);
    },
    SET_NOTIFICATION_DATA({ commit }, notificationData) {
        commit("SET_NOTIFICATION_DATA", notificationData);
    },

};