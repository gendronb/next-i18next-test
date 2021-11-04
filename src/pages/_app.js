import { StrictMode } from 'react'

import i18nConfig from '../../next-i18next.config'
import { appWithTranslation } from 'next-i18next'

const CustomApp = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  )
}

export default appWithTranslation(CustomApp, i18nConfig)
