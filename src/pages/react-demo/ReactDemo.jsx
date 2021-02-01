import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import {
    Link as RouteLink,
    Route,
    Switch,
    withRouter,
    Redirect,
} from 'react-router-dom';
import CustomHooks from './costom-hooks/CustomHooks';
import MulExecute from './mul-execute/MulExecute';
import UseStateDemo from './useState-demo/UseStateDemo';
import ClassSetState from './class-setState/ClassSetState';
import StoreObject from './store-object/StoreObject';
import { dealPath, dealNav } from '../../config/reactDemoMenuConfig';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function ReactDemo(props) {
    const getMenu = () => {
        let subMenuArray = [];
        for (let item of dealNav) {
            let subMenuTemp;
            if (item.subMenu) {
                // import('@ant-design/icons').then(({ [item.icon]: Icon }) => {
                subMenuTemp = (
                    <SubMenu
                        key={item.key}
                        // icon={Icon}
                        title={item.name}
                    >
                        {item.children.map((child) => {
                            return (
                                <Menu.Item key={child.key}>
                                    <RouteLink to={child.path}>
                                        <span>{child.name}</span>
                                    </RouteLink>
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                );
                subMenuArray.push(subMenuTemp);
                // });
            } else {
                subMenuTemp = (
                    <Menu.Item key={item.key}>
                        <RouteLink to={item.path}>
                            <span>{item.name}</span>
                        </RouteLink>
                    </Menu.Item>
                );
                subMenuArray.push(subMenuTemp);
            }
        }
        return subMenuArray;
    };
    return (
        <Layout
            className='site-layout-background'
            style={{ padding: '24px 0' }}
        >
            <Sider className='site-layout-background' width={300}>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={dealPath(props.location.pathname)}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    {getMenu()}
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Switch>
                    <Redirect
                        exact
                        from='/reactDemo'
                        to='/reactDemo/customHooks'
                    ></Redirect>
                    <Route
                        path='/reactDemo/customHooks'
                        component={CustomHooks}
                    ></Route>
                    <Route
                        path='/reactDemo/mulExecute'
                        component={MulExecute}
                    ></Route>
                    <Route
                        path='/reactDemo/UseStateDemo'
                        component={UseStateDemo}
                    ></Route>
                    <Route
                        path='/reactDemo/ClassSetState'
                        component={ClassSetState}
                    ></Route>
                    <Route
                        path='/reactDemo/StoreObject'
                        component={StoreObject}
                    ></Route>
                </Switch>
            </Content>
        </Layout>
    );
}

export default withRouter(ReactDemo);
