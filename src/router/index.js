import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

// eth
import EthIndex from '@/views/eth/EthIndex'
import Wallet from '@/views/eth/Wallet'
import WalletSeed from '@/views/eth/WalletSeed'
import ImportKeystore from '@/views/eth/ImportKeystore'
import ValueTransaction from '@/views/eth/ValueTransaction'
// import ContractTransaction from '@/views/eth/ContractTransaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Index'
      }
    }, {
      path: '/eth',
      name: 'eth-index',
      component: EthIndex,
      meta: {
        title: 'Wallet - Eth'
      },
      children: [
        {
          path: '',
          name: 'wallet',
          component: Wallet,
          meta: {
            title: 'Wallet'
          }
        }, {
          path: 'wallet-seed',
          name: 'wallet-seed',
          component: WalletSeed,
          meta: {
            title: 'Wallet - Seed'
          }
        }, {
          path: 'import-keystore',
          name: 'importkeystore',
          component: ImportKeystore,
          meta: {
            title: 'Import Wallet'
          }
        }, {
          path: 'value-transaction',
          name: 'valueTransaction',
          component: ValueTransaction,
          meta: {
            title: 'Value Transaction'
          }
        }
        // {
        //   path: 'contract-transaction',
        //   name: 'contractTransaction',
        //   component: ContractTransaction,
        //   meta: {
        //     title: 'Contract Transaction'
        //   }
        // }
      ]
    }
  ]
})
