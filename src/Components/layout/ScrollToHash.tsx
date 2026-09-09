import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  const hasHandledInitialLoad = useRef(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as
      PerformanceNavigationTiming | undefined
    const isPageReload =
      !hasHandledInitialLoad.current && navigationEntry?.type === 'reload'

    hasHandledInitialLoad.current = true

    if (isPageReload && pathname === '/home') {
      window.history.replaceState(null, '', pathname)
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const timer = window.setTimeout(() => {
      const target = document.querySelector(hash)

      if (!target) {
        return
      }

      const targetStyles = window.getComputedStyle(target)
      const scrollMarginTop = Number.parseFloat(targetStyles.scrollMarginTop) || 0
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - scrollMarginTop

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth',
      })
    }, 50)

    return () => window.clearTimeout(timer)
  }, [hash, pathname])

  return null
}

export default ScrollToHash
