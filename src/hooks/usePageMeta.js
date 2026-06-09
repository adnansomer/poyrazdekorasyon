import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://www.poyrazdekorasyon.net'

const PAGE_LABELS = {
  '/hizmetler': 'Hizmetler',
  '/yapilan-isler': 'Yapılan İşler',
  '/hakkimizda': 'Hakkımızda',
  '/iletisim': 'İletişim',
}

export default function usePageMeta(title, description, ogImage = null) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title

    const set = (sel, attr, val) => {
      const el = document.querySelector(sel)
      if (el && val) el.setAttribute(attr, val)
    }

    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', `${BASE_URL}${pathname}`)
    set('link[rel="canonical"]', 'href', `${BASE_URL}${pathname}`)

    if (ogImage) {
      set('meta[property="og:image"]', 'content', ogImage)
      set('meta[name="twitter:image"]', 'content', ogImage)
    }

    // BreadcrumbList schema — sadece iç sayfalar için
    const prevScript = document.getElementById('breadcrumb-schema')
    if (prevScript) prevScript.remove()

    const pageLabel = PAGE_LABELS[pathname]
    if (pageLabel) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: pageLabel, item: `${BASE_URL}${pathname}` },
        ],
      }
      const script = document.createElement('script')
      script.id = 'breadcrumb-schema'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }, [title, description, pathname, ogImage])
}
