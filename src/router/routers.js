const routers = [
  {
    name: 'home',
    component: () => import('../view/home'),
    meta: {
      title: "Home页面"
    }
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'user',
    component: () => import('../view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('../view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('../view/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'goodsInfo',
    component: () => import('../view/goodsInfo'),
    meta: {
      title: '商品详情'
    }
  }
];
export default routers