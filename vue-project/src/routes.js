import VueRouter from 'vue-router'
import Cars from './pages/Cars'
import Home from './pages/Home'
import Car from './pages/Car'
import CarFull from './pages/CarFull'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'carFull'
                }
            ]
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        }

        if (to.hash) {
            return { selector: to.hash }
        }

        return {
            x: 0,
            y: 200
        }
    }
})