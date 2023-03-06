
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/temp', component: () => import('pages/TempPage.vue') },
      { path: '/salles', component: () => import('pages/SallesPage.vue') },
      { path: '/parametres', component: () => import('pages/ParametresPage.vue') },
      { path: '/fav', component: () => import('pages/FavorisPage.vue') },
      { path: '/adminUser', component: () => import('pages/AdminUser.vue') },
      { path: '/adminCapteur', component: () => import('pages/AdminCapteur.vue') },
      { path: '/adminSalles', component: () => import('pages/AdminSalles.vue') },
      { path: 'connexion', component: () => import('pages/PageConnexion.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
