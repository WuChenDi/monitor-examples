import DashBroad from "../pages/DashBroad";
import UserAction from "../pages/UserAction";
import ErrorInfo from "../pages/ErrorInfo";
import VisitLog from "../pages/VisitLog";
import Pagenotfound from "../pages/404";

export const mainRoutes = [
    {
        path:"/404",
        component:Pagenotfound
    }
];  

export const adminRoutes = [
    {
        path: "/dashbroad",
        component: DashBroad,
        isShow: true,
        title: '汇总',
        icon: 'bar-chart'
    },
    {
        path: "/userAction",
        component: UserAction,
        isShow: true,
        exact: true,
        title: '行为日志',
        icon: 'bar-chart'
    },
    {
        path: "/visitLog",
        component: VisitLog,
        isShow: true,
        exact: true,
        title: '访问日志',
        icon: 'bar-chart'
    },
    {
        path: "/errorInfo",
        component: ErrorInfo,
        isShow: true,
        exact: true,
        title: '错误日志',
        icon: 'bar-chart'
    }
];