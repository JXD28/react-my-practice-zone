const dealPath = (path) => {
    let selectedKeys = null;
    switch (path) {
        case 'home':
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
        path: '/home',
        name: 'Home',
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
