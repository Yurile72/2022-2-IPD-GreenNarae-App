import { createWebHistory, createRouter } from "vue-router";
// import ErrorPage from "../views/ErrorPage.vue"
import Home from "../views/Home.vue"
import VillageSelected from "../views/VillageSelected.vue"
import VillageSetup from "../views/VillageSetup.vue"
import Pickup from "../views/Pickup.vue"
import Stamp from "../views/Stamp.vue"

const routes = [
    { path : "/", name : "Home", component : Home },
    { path : "/VillageSetup", name : "VillageSetup", component : VillageSetup },
    { path : "/VillageSelected", name : "VillageSelected", component : VillageSelected, props: true },
    { path : "/Pickup", name : "Pickup", component : Pickup },
    { path : "/Stamp", name : "Stamp", component : Stamp },
    // { path : "/:catchAll(.*)", name : "ErrorPage", component : ErrorPage},
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;
