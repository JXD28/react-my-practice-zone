const dealPath = (path) => {
    let selectedKeys = null;
    switch (path) {
        case 'chat':
            selectedKeys = ['1'];
            break;
        case 'reactDemo':
            selectedKeys = ['2'];
            break;
        default:
            selectedKeys = ['1'];
    }
    return selectedKeys;
};

const dealNav = [
    {
        subMenu: false,
        key: '1',
        path: '/chat',
        name: 'Chat',
    },
    ,
    {
        subMenu: false,
        key: '2',
        path: '/reactDemo',
        name: 'React',
    },
];

export { dealPath, dealNav };
