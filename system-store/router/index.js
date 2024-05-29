import { createRouter, createWebHistory } from "vue-router";
import ClientesP from "~/components/ClientesP.vue";

const routes = [
    {
        path: '/clientesp',
        name: 'CPF',
        component: ClientesP,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;