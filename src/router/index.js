import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "main",
        component:() => import("@/views/checkNum.vue")
    },
    {
        path: "/result/:color",
        name: "result",
        component:() => import("@/views/result.vue"),
        props: true
    },
    {
        path: "/color/:color",
        name: "color",
        component:() => import("@/views/color.vue"),
        props: true
    }
]

const router = new VueRouter({
    mode: "history",
    routes,
    base:'/veranda_tomato'
})

export default router