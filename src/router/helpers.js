export const scrollBehavior = (to, from, savedPosition) => {
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
export const updateDocumentTitle = (meta) => {
  if (!meta?.title) {
    return
  }
  document.title = meta.title
}

/**
 * Update the document description based on the route meta information.
 * This is useful for SEO and user experience.
 * @param {RouteMeta} meta 
 * @returns 
 */
export const updateDocumentDescription = (meta) => {
  if (!meta?.description) {
    return
  }
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description)
  }
}
