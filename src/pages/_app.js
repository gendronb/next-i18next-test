import { StrictMode } from 'react'

import { NextIntlProvider } from 'next-intl'

const CustomApp = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </StrictMode>
  )
}

export default CustomApp
