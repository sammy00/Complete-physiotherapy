import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  path?: string
}

const siteName = "Dr. Vanita's Complete Physiotherapy"
const ogImage = '/images/brand/Complete Logo.png'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function Seo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | ${siteName}`
    const baseUrl = window.location.origin
    const canonicalUrl = `${baseUrl}${path}`

    document.title = pageTitle

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageTitle,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: `${baseUrl}${ogImage}`,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = canonicalUrl
  }, [description, path, title])

  return null
}

export default Seo
