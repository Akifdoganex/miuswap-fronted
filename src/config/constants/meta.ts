import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MiuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn MIU through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MiuSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MiuSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MiuSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MiuSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MiuSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MiuSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MiuSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MiuSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MiuSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MiuSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MiuSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MiuSwap')}`,
      }
    default:
      return null
  }
}
