import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/Dashboard'

Vue.use(VueRouter)

const routes = [
    {
        path: '/admin',
        component: dashboard,
        children: [
        {
            path: '',
            component: () => import(/* webpackChunkName: "Overview" */ '../components/Home.vue')
        },
        {
            path: 'loaiphong',
            component: () => import(/* webpackChunkName: "Messages" */ '../components/LoaiPhong.vue')
        },
        {
            path: 'themLoaiPhong',
            name: 'themLoaiPhong',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/ThemLoaiPhong.vue')
        },
        {
            path: 'loaiPhongInfo/:loaiPhongID',
            name: 'loaiPhongInfo',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/LoaiPhongInfo.vue')
        },
        {
            path: 'khachhang',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/KhachHang.vue'),
        },
        {
            path: 'khachHangInfo/:khachHangID',
            name: 'khachHangInfo',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/KhachHangInfo.vue')
        },
        {
            path: 'donDatPhong/:khachHangID',
            name: 'donDatPhong',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/KhachHangDonDatPhong.vue')
        },
        {
            path: 'thongke',
            component: () => import(/* webpackChunkName: "Messages" */ '../components/ThongKe.vue')
        },
        // {
        //     path: 'themGiuong/:para',
        //     name: 'themGiuong',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/ThemGiuong.vue'),
        //     props: true,
        // },
        // {
        //     path: 'themVatTu',
        //     name: 'themVatTu',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/ThemVatTu.vue')
        // },
        {
            path: 'themLoaiPhong/:para',
            name: 'themLoaiPhong',
            component: () => import(/* webpackChunkName: "Profile" */ '../components/ThemLoaiPhong.vue')
        },
        // {
        //     path: 'updatebook/:bookID',
        //     name: 'updateBook',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/UpdateBook.vue')
        // },
        // {
        //     path: 'bookInfo/:bookID',
        //     name: 'bookInfo',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/BookInfo.vue')
        // },
        // {
        //     path: 'changePassword',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/ChangePassword.vue')
        // },
        // {
        //     path: 'editProfile',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/EditProfile.vue')
        // },
        // {
        //     path: 'changePassword/:userID',
        //     name: 'changePassword',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/ChangePassword.vue')
        // },
        // {
        //     path: 'editProfile/:userID',
        //     name:  'editProfile',
        //     component: () => import(/* webpackChunkName: "Profile" */ '../components/EditProfile.vue')
        // }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
