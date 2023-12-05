import { createRouter, createWebHistory } from "vue-router"
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue"
import ApiDemoView from "@/views/ApiDemoView.vue"
import LifecycleDemoView from "@/views/LifecycleDemoView.vue"
import ReactivityDemoView from "@/views/ReactivityDemoView.vue"
import PiniaDemoView from "@/views/PiniaDemoView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/apidemo',
      name: 'apidemo',
      component: ApiDemoView
    },
    {
      path: '/lifecycledemo',
      name: 'lifecycledemo',
      component: LifecycleDemoView
    },
    {
      path: '/reactivitydemo',
      name: 'reactivitydemo',
      component: ReactivityDemoView
    },
    {
      path: '/piniademo',
      name: 'piniademo',
      component: PiniaDemoView
    }
  ]
})

export default router
