import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hystory',
    routers: [
        {
            path: '/',
            component: Home
        }
    ]
})