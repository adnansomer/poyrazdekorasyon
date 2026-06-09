import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://www.poyrazdekorasyon.net'

export default function usePageMeta(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) metaDesc.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc && description) ogDesc.setAttribute('content', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `${BASE_URL}${pathname}`)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `${BASE_URL}${pathname}`)
  }, [title, description, pathname])
}
