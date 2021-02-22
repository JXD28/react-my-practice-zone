import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Chat from '../chat/Chat';
import Header from './header/Header';
import ReactDemo from '../react-demo/ReactDemo';
const { Content, Footer } = Layout;

function AppRouter(props) {
    return (
        <Layout>
            <Header></Header>
            <Content style={{ padding: '0 50px' }}>
                <Switch>
                    <Redirect exact from='/' to='/chat' />
                    <Route path='/chat' component={Chat}></Route>
                    <Route path='/reactDemo' component={ReactDemo}></Route>
                    <Redirect from='*' to='/chat'></Redirect>
                </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default AppRouter;
