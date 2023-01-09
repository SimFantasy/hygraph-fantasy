import React, { useEffect } from 'react'
import { siteName } from '@/constants/settings'

const useTitle = title => {
  const titlebar = title ? `${title} - ${siteName}` : siteName
  useEffect(() => {
    document.title = titlebar
    return () => {
      document.title = siteName
    }
  }, [title])
}

export default useTitle
