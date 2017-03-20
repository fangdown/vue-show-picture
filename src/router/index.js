import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Article from '@/pages/article'
import PictureList from '@/pages/pictureList'
import Picture from '@/pages/picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/pictureList',
      name: 'PictureList',
      component: PictureList
    },
    {
      path: '/picture',
      name: 'picture',
      component: Picture
    }
  ]
})
