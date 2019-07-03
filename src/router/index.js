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
const Detail = () => import(/*webpackChunkName: 'Detail'*/ '@/components/Detail');
const Search = () => import(/*webpackChunkName: 'Search'*/ '@/components/Search')

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/rage',
      component: Rage
    },
    {
      path: '/songLis',
      component: SongLis,
      meta: {
        keepAlive: true
      }
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
      path: '/search',
      component: Search
    },
    {
      path: '/',
      name: 'Rage',
      component: Rage,
    }
  ]
})
