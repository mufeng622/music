import Vue from 'vue'
import Router from 'vue-router'
// import Rage from '@/components/tabCon/Rage'
// import SongLis from '@/components/tabCon/SongLis'
// import Rank from '@/components/tabCon/Rank'
// import Hot from '@/components/tabCon/Hot'

Vue.use(Router)

const Rage = () => import(/*webpackChunkName: 'Rage'*/ '@/components/tabCon/Rage');
const SongLis = () => import(/*webpackChunkName: 'SongLis'*/ '@/components/tabCon/SongLis');
const Rank = () => import(/*webpackChunkName: 'Rank'*/ '@/components/tabCon/Rank');
const Hot = () => import(/*webpackChunkName: 'Hot'*/ '@/components/tabCon/Hot');
const Detail = () => import(/*webpackChunkName: 'Detail'*/ '@/components/Detail')

export default new Router({
  routes: [
    {
      path: '/rage',
      component: Rage
    },
    {
      path: '/songLis',
      component: SongLis
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/hot',
      component: Hot
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/',
      name: 'Rage',
      component: Rage,
    }
  ]
})
