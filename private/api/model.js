var menus = [
    {
        menu_id: 1,
        sub_id: 1,
        title: '仪表板',
        category: 'dashboard',
        class: 'zmdi zmdi-home',
        url: '/dashboard',
        active: false,
        sub: false,
        open: false,
        menus:[]
    },
    {
        menu_id: 2,
        sub_id: 2,
        title: '社区',
        category: 'community',
        class: 'zmdi zmdi-view-list',
        url: '/community/list',
        active: false,
        sub: false,
        open: false,
        menus:[]
    },
    {
        menu_id: 3,
        sub_id: 0,
        title: '视频',
        category: 'video',
        class: 'zmdi zmdi-case-play',
        url: '/video/list',
        active: false,
        sub: false,
        open: false,
        menus:[]
    },
    {
        menu_id: 4,
        sub_id: 0,
        title: '记事本',
        category: 'notepad',
        class: 'zmdi zmdi-assignment',
        url: '/notepad',
        active: false,
        sub: false,
        open: false,
        menus:[]
    }
]

module.exports.menus = menus
