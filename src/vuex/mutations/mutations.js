export default {
    // card
    SET_CARDS_TO_STATE: (state, cards) => {
        state.cards = cards;
    },
    SET_SELECTED_CARD: (state, card) => {
        state.selectedCard = card
    },
    UPDATE_CARD: (state, card) => {
        state.selectedCard = card
    },
    POST_CARD: (state, card) => {
        state.selectedCard = card
    },
    // company
    UPDATE_COMPANY: (state, company) => {
        state.company = company
        // обновляем company info в текущей выбранной карточке
        state.selectedCard.id_company_info = company
    },
    POST_COMPANY: (state, company) => {
        state.company = company
        // обновляем company info в текущей выбранной карточке
        state.selectedCard.id_company_info = company
    },
    // social
    SET_SELECTED_SOCIAL: (state, social) => {
        state.social = social
    },
    POST_SOCIAL: (state, socialData) => {
        state.socialData = socialData;
    },
    UPDATE_SOCIAL: (state, socialData) => {
        state.socialData = socialData

        if (state.socialPath === 'personal') {
            state.selectedCard.id_social = socialData
        } else {
            state.selectedCard.id_company_info.id_social = socialData
        }

    },
    UPDATE_SOCIAL_PATH: (state, socialPath) => {
        state.socialPath = socialPath
    },
    // портфолио
    SET_SELECTED_PORTFOLIO_ITEM: (state, selectedPortfolioItem) => {
        state.selectedPortfolioItem = selectedPortfolioItem
    },
    SET_PORTFOLIO: (state, portfolio) => {
        state.portfolio = portfolio
    },
    UPDATE_PORTFOLIO: (state, portfolioItem) => {
        state.selectedPortfolioItem = portfolioItem;
    },
    POST_PORTFOLIO: (state, portfolioItem) => {
        state.selectedPortfolioItem = portfolioItem;
    },

    // токен
    SET_TOKEN_STATUS_TO_STATE: (state, tokenStatus) => {
        state.tokenStatus = tokenStatus;
    },

    // данные для формы удалниея
    SET_DELETE_DATA: (state, deleteData) => {
        state.deleteData = deleteData;
    },
    // данные для окна с оповещением
    SET_NOTIFICATION_DATA: (state, notificationData) => {
        state.notificationData = notificationData;
    },
    SET_SUBSCRIPTIONS_TO_STATE: (state, subscriptions) => {
        state.subscriptions = subscriptions;
    },
    SET_ACCOUNT_TO_STATE: (state, account) => {
        state.account = account;
    },
    DELETE_CARD: (state) => {
        state.selectedCard = {}
    }
};