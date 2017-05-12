import Vue from 'vue'
import Router from 'vue-router'
import Wallet from '@/components/Wallet'
import WalletSeed from '@/components/WalletSeed'
import ImportKeystore from '@/components/ImportKeystore'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'wallet',
      component: Wallet,
      meta: {
        title: 'Wallet'
      }
    }, {
      path: '/wallet-seed',
      name: 'wallet-seed',
      component: WalletSeed,
      meta: {
        title: 'Wallet - Seed'
      }
    }, {
      path: '/import-keystore',
      name: 'importkeystore',
      component: ImportKeystore,
      meta: {
        title: 'Import Wallet'
      }
    }
  ]
})