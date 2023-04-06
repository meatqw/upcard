export default {
    CARDS(state) {
      return state.cards;
    },
    SELECTED_CARD(state) {
        return state.selectedCard;
    },
    COMPANY(state) {
        return state.company;
    },
    SOCIAL(state) {
        return state.social;
    },
    SOCIAL_DATA(state) {
        return state.socialData;
    },
    SOCIAL_PATH(state) {
        return state.socialPath;
    },
    
    // портфолио
    SELECTED_PORTFOLIO_ITEM(state) {
        return state.selectedPortfolioItem
    },
    PORTFOLIO(state){
        return state.portfolio;
    }
    
  };