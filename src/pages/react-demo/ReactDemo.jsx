import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import { Link as RouteLink, Route, Switch } from 'react-router-dom';
import CustomHooks from './costom-hooks/CustomHooks';
import MulExecute from './mul-execute/MulExecute';
import UseStateDemo from './useState-demo/UseStateDemo';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function ReactDemo(props) {
    return (
        <Layout
            className='site-layout-background'
            style={{ padding: '24px 0' }}
        >
            <Sider className='site-layout-background' width={200}>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu
                        key='sub1'
                        icon={<UserOutlined />}
                        title='react hooks'
                    >
                        <Menu.Item key='1'>
                            <RouteLink to='/reactDemo/customHooks'>
                                <span>自定义hooks</span>
                            </RouteLink>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <RouteLink to='/reactDemo/mulExecute'>
                                <span>多次执行setState</span>
                            </RouteLink>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <RouteLink to='/reactDemo/UseStateDemo'>
                                <span>手写useState</span>
                            </RouteLink>
                        </Menu.Item>
                        <Menu.Item key='4'>option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='sub2'
                        icon={<LaptopOutlined />}
                        title='subnav 2'
                    >
                        <Menu.Item key='5'>option5</Menu.Item>
                        <Menu.Item key='6'>option6</Menu.Item>
                        <Menu.Item key='7'>option7</Menu.Item>
                        <Menu.Item key='8'>option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key='sub3'
                        icon={<NotificationOutlined />}
                        title='subnav 3'
                    >
                        <Menu.Item key='9'>option9</Menu.Item>
                        <Menu.Item key='10'>option10</Menu.Item>
                        <Menu.Item key='11'>option11</Menu.Item>
                        <Menu.Item key='12'>option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Switch>
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
                </Switch>
            </Content>
        </Layout>
    );
}

export default ReactDemo;
