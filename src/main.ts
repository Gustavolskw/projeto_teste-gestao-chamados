import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import SidebarLayout from './components/SidebarLayout.vue'
import Dashboard from './components/Dashboard.vue'
import EmpresaForm from './components/EmpresaForm.vue'
import UsuarioForm from './components/UsuarioForm.vue'
import TecnicoForm from './components/TecnicoForm.vue'
import CategoriaForm from './components/CategoriaForm.vue'
import StatusForm from './components/StatusForm.vue'
import Login from './components/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: SidebarLayout,
      children: [
        { path: '', redirect: '/login' },
        { path: 'dashboard', component: Dashboard },
        { path: 'empresas', component: EmpresaForm },
        { path: 'usuarios', component: UsuarioForm },
        { path: 'tecnicos', component: TecnicoForm },
        { path: 'categorias', component: CategoriaForm },
        { path: 'status', component: StatusForm }
      ]
    },
    { path: '/login', component: Login }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')