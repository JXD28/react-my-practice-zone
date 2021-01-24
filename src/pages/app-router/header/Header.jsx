import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { dealPath, dealNav } from '../../../config/menuConfig';
import { Link as RouteLink, withRouter } from 'react-router-dom';
import useGetMenuKey from './custom-hooks/useGetMenuKey';
const { Header } = Layout;
const { SubMenu, Item } = Menu;

function CustomHeader(props) {
    const selectedKey = useGetMenuKey(props);
    return (
        <Header className='header'>
            <Menu
                theme='dark'
                mode='horizontal'
                selectedKeys={selectedKey}
                defaultSelectedKeys={['1']}
            >
                {dealNav.map((item) => {
                    const { key, subMenu, name, path } = item;
                    if (subMenu) {
                        return (
                            <SubMenu
                                key={key}
                                title={name}
                                className='subMenu-item'
                            >
                                {item.children.map((child) => (
                                    <Menu.Item key={child.key}>
                                        <RouteLink to={child.path}>
                                            <span className='subMenu-name'>
                                                {child.name}
                                            </span>
                                        </RouteLink>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <Item key={key} className='menu-item'>
                                <RouteLink to={path}>
                                    <span className='menu-name'>{name}</span>
                                </RouteLink>
                            </Item>
                        );
                    }
                })}
            </Menu>
        </Header>
    );
}

export default withRouter(CustomHeader);
