import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import { adminRoutes } from '../Routes';

const routes = adminRoutes.filter(route => route.isShow)
const { Header, Content, Sider } = Layout;

class Index extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ 
                    height: 100,
                    background: 'black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ color: 'white' }}>监控系统</h2>
                    <Avatar size="large" icon="user" />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {routes.map(route => {
                                return (
                                    <Menu.Item 
                                        key={route.path}
                                        onClick={p => this.props.history.push(p.key)}
                                    >
                                        <Icon type={route.icon}/>
                                        {route.title}
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                        <Content
                            style={{
                                background: '#fff',
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Index);
