
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/shop', component: () => import('pages/shopPage.vue') },
      { path: '/about', component: () => import('pages/aboutPage.vue') },
      { path: '/blog', component: () => import('pages/blogPage.vue') },
      { path: '/details', component: () => import('pages/product_Details.vue') },
      { path: '/contact', component: () => import('pages/contactPage.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/confirm', component: () => import('pages/confirmPage.vue') },
      { path: '/cart', component: () => import('pages/cartPage.vue') }



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
