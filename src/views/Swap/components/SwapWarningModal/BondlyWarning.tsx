import React from 'react'
import { Text } from '@miuswap/uikits'
import { useTranslation } from 'contexts/Localization'

const BondlyWarning = () => {
  const { t } = useTranslation()

  return <Text>{t('Warning: BONDLY has been compromised. Please remove liqudity until further notice.')}</Text>
}

export default BondlyWarning
