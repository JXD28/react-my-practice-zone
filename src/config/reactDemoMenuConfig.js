const dealPath = (path) => {
    let selectedKeys = null;
    switch (path) {
        case '/reactDemo/customHooks':
            selectedKeys = ['sub-1'];
            break;
        case '/reactDemo/mulExecute':
            selectedKeys = ['sub-2'];
            break;
        case '/reactDemo/UseStateDemo':
            selectedKeys = ['sub-3'];
            break;
        case '/reactDemo/ClassSetState':
            selectedKeys = ['sub-4'];
            break;
        case '/reactDemo/StoreObject':
            selectedKeys = ['sub-5'];
            break;
        default:
            selectedKeys = ['sub-1'];
    }
    return selectedKeys;
};

const dealNav = [
    {
        subMenu: true,
        key: 'sub1',
        name: 'react hooks',
        icon: 'UserOutlined',
        children: [
            {
                key: 'sub-1',
                path: '/reactDemo/customHooks',
                name: '自定义hooks',
            },
            {
                key: 'sub-2',
                path: '/reactDemo/mulExecute',
                name: '多次执行hook setState',
            },
            {
                key: 'sub-3',
                path: '/reactDemo/UseStateDemo',
                name: '手写useState',
            },
            {
                key: 'sub-4',
                path: '/reactDemo/ClassSetState',
                name: 'class 组件的this.setState',
            },
            {
                key: 'sub-5',
                path: '/reactDemo/StoreObject',
                name: 'useState存储Object',
            },
        ],
    },
];

export { dealPath, dealNav };
