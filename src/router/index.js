import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import Legal from '../views/Legal.vue'
import NotFound from '../views/NotFound.vue'
import { trackPageView } from '../utils/analytics.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy - Layer Z by Herragen A.G.',
      description: 'Privacy Policy for Layer Z platform by Herragen A.G. Learn how we collect, use, and protect your personal data.'
    }
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService,
    meta: {
      title: 'Terms of Service - Layer Z by Herragen A.G.',
      description: 'Terms of Service for Layer Z platform by Herragen A.G. Review our terms and conditions.'
    }
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicy,
    meta: {
      title: 'Cookie Policy - Layer Z by Herragen A.G.',
      description: 'Cookie Policy for Layer Z platform by Herragen A.G. Learn about the cookies we use and how to manage your preferences.'
    }
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal,
    meta: {
      title: 'Legal Hub - Layer Z by Herragen A.G.',
      description: 'Legal information hub for Layer Z platform by Herragen A.G. Access all legal documents and policies.'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 - Page Not Found - Layer Z',
      description: 'The page you are looking for could not be found.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

// Update document title and meta description for each route
router.beforeEach((to, from, next) => {
  updateDocumentTitle(to.meta)
  updateDocumentDescription(to.meta)
  trackPageView(window.location.pathname, document.title);
  next()
})

export default router


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  } else {
    return { top: 0 }
  }
}

/**
 * Update the document title based on the route meta information.
 * This is useful for SEO and user experience.
 * @param {RouteMeta} meta 
 */
const updateDocumentTitle = (meta) => {
  document.title = meta.title || 'Layer Z by Herragen A.G.'
}

/**
 * Update the document description based on the route meta information.
 * This is useful for SEO and user experience.
 * @param {RouteMeta} meta 
 * @returns 
 */
const updateDocumentDescription = (meta) => {
  if (!meta || !meta.description) {
    return
  }
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description)
  }
}
