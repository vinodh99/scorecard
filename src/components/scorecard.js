import React, { Component } from 'react';
import './scorecard.css';
import { Layout, Menu, Icon, Row, Col, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const data = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">change RIE</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">change Avg Minutes for GQL</a>
                </Menu.Item>
                {/* <Menu.Divider /> */}
                <Menu.Item key="3">change saving Hours for GHC (IT Ops)</Menu.Item>
                <Menu.Item key="3">Time developers spend on problems for GHC(Dev)</Menu.Item>

            </Menu>
        );
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <img src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png" alt="image" width="200px" height="70px"></img>

                        <SubMenu
                            key="sub1"
                            title={<span style={{ textAlign: 'right' }}><Icon type="sliders" />GTM</span>}
                        >
                            <Menu.Item key="1"  >Revenue/Year: 20</Menu.Item>
                            <Menu.Item key="2" >
                                <Row>
                                    Revenue inc estimate
                            </Row>
                                <Row>
                                    20
                            </Row>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span style={{ textAlign: 'right' }}><Icon type="sliders" />GQL</span>}
                        >
                            <Menu.Item key="1"  >Failures/Year: 20</Menu.Item>
                            <Menu.Item key="2" >Revenue/minute</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span style={{ textAlign: 'right' }}><Icon type="sliders" />GHC (IT Ops)</span>}
                        >
                            <Menu.Item key="1"  >IT Average Salary</Menu.Item>
                            <Menu.Item key="2" >IT staff Headcount</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={<span style={{ textAlign: 'right' }}><Icon type="sliders" />GHC (Developers)</span>}
                        >
                            <Menu.Item key="1"  >Develper Avg salary</Menu.Item>
                            <Menu.Item key="2" >Developer Staff</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={<span style={{ textAlign: 'right' }}><Icon type="sliders" />GFX</span>}
                        >
                            <Menu.Item key="1"  >App. Annual Revenue</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Row>
                            <Col span={12}>
                                <h1 style={{ fontWeight: 'bold', color: '#0066c', fontFamily: 'Cochin', textAlign: 'right' }}>SCORECARD</h1>
                            </Col>
                            <Col span={12}>
                                <Dropdown overlay={data} trigger={['click']}>
                                    <h1 className="ant-dropdown-link" style={{ paddingRight: 40, fontWeight: 'bold', color: '#0066c', fontFamily: 'Cochin', textAlign: 'right' }}>
                                        <Icon type="setting" />
                                    </h1>
                                </Dropdown>

                            </Col>

                        </Row>

                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    </Footer>
                </Layout>
            </Layout >
        );
    }
}



export default DashBoard;

