import { createRouter, createWebHistory } from "vue-router";

// information
import upInformationCompany from "../components/information/up-information-company";
import upInformationPersonal from "../components/information/up-information-personal";
// card
import upCardAppearance from "@/components/card/up-card-appearance.vue";
import upCardEditMenu from "@/components/card/up-card-edit-menu.vue";
import upCardQr from "@/components/card/up-card-qr.vue";
// portfolio
import upPortfolioList from "@/components/portfolio/up-portfolio-list.vue";
import upPortfolioItemEdit from "@/components/portfolio/up-portfolio-item-edit.vue";
import upPortfolioDeleteConfirmation from "@/components/portfolio/up-portfolio-delete-confirmation.vue";
import upPortfolioItemDeleteConfirmation from "@/components/portfolio/up-portfolio-item-delete-confirmation.vue";
// calendar
import upCalendarMenu from "@/components/calendar/up-calendar-menu.vue";
import upCalendarDeleteConfirmation from "@/components/calendar/up-calendar-delete-confirmation.vue";
import upCalendarList from "@/components/calendar/up-calendar-list.vue";
import upCalendarItem from "@/components/calendar/up-calendar-item.vue";
// social
import upSocialList from "@/components/social/up-social-list.vue";
import upSocialConfirmation from "@/components/social/up-social-confirmation.vue";
// account
import upAccountPersonal from "@/components/account/up-account-personal.vue";
import upAccountCardsList from "@/components/account/up-account-cards-list.vue";
import upAccountSettings from "@/components/account/up-account-settings.vue";
import upAccountDeleteConfirmation from "@/components/account/up-account-delete-confirmation.vue";
import upAccountExitConfirmation from "@/components/account/up-account-exit-confirmation.vue";
// subscriptions
import upSubscriptionsList from "@/components/subscriptions/up-subscriptions-list.vue";
import upSubscriptionsListReferral from "@/components/subscriptions/up-subscriptions-list-referral.vue";


let routes = [
  // information
  {
    path: "/personal",
    name: "personal",
    component: upInformationPersonal,
  },
  {
    path: "/company",
    name: "company",
    component: upInformationCompany,
  },
  // card
  {
    path: "/card-appearance",
    name: "card-appearance",
    component: upCardAppearance,
  },
  {
    path: "/card-edit",
    name: "card-edit",
    component: upCardEditMenu,
  },
  {
    path: "/card-qr",
    name: "card-qr",
    component: upCardQr,
  },
    // portfolio
  {
    path: "/portfolio-list",
    name: "portfolio-list",
    component: upPortfolioList,
  },
  {
    path: "/portfolio-item",
    name: "portfolio-item",
    component: upPortfolioItemEdit,
  },
  {
    path: "/portfolio-delete",
    name: "portfolio-delete",
    component: upPortfolioDeleteConfirmation,
  },
  {
    path: "/portfolio-item-delete",
    name: "portfolio-item-delete",
    component: upPortfolioItemDeleteConfirmation,
  },
    // calendar
  {
    path: "/calendar-menu",
    name: "calendar-menu",
    component: upCalendarMenu,
  },
  {
    path: "/calendar-delete",
    name: "calendar-delete",
    component: upCalendarDeleteConfirmation,
  },
  {
    path: "/calendar-list",
    name: "calendar-list",
    component: upCalendarList,
  },
  {
    path: "/calendar-item",
    name: "calendar-item",
    component: upCalendarItem,
  },
    // social
  {
    path: "/social-list",
    name: "social-list",
    component: upSocialList,
  },
  {
    path: "/social-confirmation",
    name: "social-confirmation",
    component: upSocialConfirmation,
  },
    // account
  {
    path: "/account",
    name: "account",
    props: true,
    component: upAccountPersonal,
  },
  {
    path: "/account-cards",
    name: "account-cards",
    component: upAccountCardsList,
  },
  {
    path: "/account-settings",
    name: "account-settings",
    component: upAccountSettings,
  },
  {
    path: "/account-delete",
    name: "account-delete",
    component: upAccountDeleteConfirmation,
  },
  {
    path: "/account-exit",
    name: "account-exit",
    component: upAccountExitConfirmation,
  },
    // subscriptions
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: upSubscriptionsList,
  },
  {
    path: "/subscriptions-referral",
    name: "subscriptions-referral",
    component: upSubscriptionsListReferral,
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;