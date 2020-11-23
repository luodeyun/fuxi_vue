import home from '../components/home'
import about from '../components/about'
 const  routes=[
    {
        path:'/home/:id',
        component: home
    },{
        path:'/about',
        component:about
    },
];
export default routes
