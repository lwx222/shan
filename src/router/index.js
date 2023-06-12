//route ����·����·��
//router ·�ɹ�����
import { createRouter, createWebHashHistory } from 'vue-router';
// ����·��ʵ�������� `routes` ����const router = createRouter({// �ڲ��ṩ�� history ģʽ��ʵ�֡�Ϊ�˼����������������ʹ�� hash ģʽ��
//����·�� route
const routes = [{
        path: '/',
        name: 'Accueil',
        component: () =>
            import ('../components/view/Accueil.vue')
    },
    {
        path: '/Accueil1',
        name: 'Accueil1',
        component: () =>
            import ('../components/view/Accueil.vue')
    },

    {
        path: '/showindex',
        name: 'showindex',
        component: () => import ('../components/showmain/show.vue'),
        children: [{
                path: '',
                name: '1',
                component: () =>
                    import ('../components/view/pagemain.vue')
            },
            {
                path: 'page1',
                name: 'page1',
                component: () =>
                    import ('../components/view/page1.vue')
            },
            {
                path: 'page2',
                name: 'page2',
                component: () =>
                    import ('../components/view/page2.vue')
            },
            {
                path: 'page3',
                name: 'page3',
                component: () =>
                    import ('../components/view/page3.vue')
            },
            {
                path: 'page4',
                name: 'page4',
                component: () =>
                    import ('../components/view/page4.vue')
            },
        ]
    },


]

//����·�ɹ��� router
const router = createRouter({ // �ڲ��ṩ�� history ģʽ��ʵ�֡�Ϊ�˼����������������ʹ�� hash ģʽ��
    history: createWebHashHistory(),
    routes,
});
//����·��
export default router
