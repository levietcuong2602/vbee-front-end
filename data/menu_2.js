export const menu = {
  items: [{
      name: 'Trang chủ',
      url: '/',
      icon: 'icon-home',
    },
    {
      title: true,
      name: 'Feature',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Quản lý User',
      url: '/user_manager',
      icon: 'icon-user-follow',
      children: [{
        name: 'Dashboard',
        url: '/user_manager/dashboard',
        icon: 'icon-screen-desktop'
      },
      {
        name: 'Danh sách User',
        url: '/user_manager/list-user',
        icon: 'icon-people'
      },
      {
        name: 'Danh sách đại lý',
        url: '/user_manager/list-agent',
        icon: 'icon-calendar'
      }]
    },
    {
      name: 'Profile',
      url: '/profile',
      icon: 'icon-user',
      children: [{
          name: 'Tổng quan',
          url: '/profile/general',
          icon: 'icon-speedometer'
        },
        {
          name: 'Thống kê chi tiết',
          url: '/profile/analysic-detail',
          icon: 'icon-chart'
        },
        {
          name: 'Lịch sử thanh toán',
          url: '/profile/payment-history',
          icon: 'icon-hourglass'
        },
        {
          name: 'Mua gói cước',
          url: '/profile/buy-data',
          icon: 'icon-bag'
        },
      ]
    },
    {
      name: 'Vbee Cloud',
      url: '/vbee-cloud',
      icon: 'icon-social-soundcloud',
      children: [{
          name: 'Trực tiếp',
          url: '/vbee-cloud/directions',
          icon: 'icon-directions'
        },
        {
          name: 'Qua API',
          url: '/vbee-cloud/api',
          icon: 'icon-map',
          children: [{
              name: 'Khởi tạo API',
              url: '/vbee-cloud/api/init-api',
              icon: 'icon-doc'
            },
            {
              name: 'Danh sách API',
              url: '/vbee-cloud/api/list-api',
              icon: 'icon-list'
            },
            {
              name: 'Hướng dẫn ',
              url: '/vbee-cloud/api/guide-api',
              icon: 'icon-note'
            }
          ]
        },
        {
          name: 'Từ điển',
          url: '/vbee-cloud/dictionary',
          icon: 'icon-notebook'
        },
      ]
    },
    {
      name: 'Báo nói',
      url: '/newspapers-speech',
      icon: 'icon-speech',
    },
    {
      name: 'Sách nói',
      url: '/books-speech',
      icon: 'icon-microphone'
    },
    {
      title: true,
      name: 'Admin',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Hệ thống',
      url: '/admin',
      icon: 'icon-lock',
      children: [{
          name: 'Phân quyền',
          url: '/admin/group-permiss',
          icon: 'icon-shield'
        },
        {
          name: 'Quản lý tài khoản',
          url: '/admin/accounts',
          icon: 'icon-people'
        },
        {
          name: 'Quản lý ngân hàng',
          url: '/admin/banks',
          icon: 'icon-credit-card'
        }
      ]
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   class: '',
    //   wrapper: {
    //     element: '',
    //     attributes: {}
    //   }
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop'
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   icon: 'icon-pencil'
    // },
    // {
    //   title: true,
    //   name: 'Components',
    //   class: '',
    //   wrapper: {
    //     element: '',
    //     attributes: {}
    //   }
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [{
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell'
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell'
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell'
    //     }
    //   ]
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'primary',
    //     text: 'NEW'
    //   }
    // },
    // {
    //   divider: true
    // },
    // {
    //   title: true,
    //   name: 'Extras'
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [{
    //       name: 'Login',
    //       url: '/pages/login',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Register',
    //       url: '/pages/register',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/pages/404',
    //       icon: 'icon-star'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/pages/500',
    //       icon: 'icon-star'
    //     }
    //   ]
    // },
    // {
    //   name: 'Download CoreUI',
    //   url: 'http://coreui.io/vue/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success'
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'http://coreui.io/pro/vue/',
    //   icon: 'icon-layers',
    //   variant: 'danger'
    // }
  ]
}
