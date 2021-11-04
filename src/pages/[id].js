import { useRouter } from 'next/router'

import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Id = () => {

  const router = useRouter()
  const { query: { id: pageId } } = router

  const { t } = useTranslation('common')

  return (

    <div>
      <p>Page id = {pageId}</p>
      <p>{t('test')}</p>
    </div>

  )

}

export default Id

export const getServerSideProps = async ({ locale }) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    }
  }
}
