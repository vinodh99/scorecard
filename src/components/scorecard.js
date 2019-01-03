import React, { Component } from 'react';
import './scorecard.css';
import { Layout, Menu, Icon, Row, Col, Dropdown } from 'antd';
import Cards from './cards';

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
            <div >
                <Layout style={{ minHeight: '100vh' }}>
                    <Layout>
                        <Header className="card" style={{ background: '#525252', padding: 0 }} >
                            <Row style={{ alignContent: 'center' }}>
                                <Col span={8} style={{ alignContent: 'center', paddingLeft: 20 }}>
                                    <img src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png" alt="reliable" width="150px" height="50px"></img>
                                </Col>
                                <Col span={8} style={{ fontWeight: 'bold', color: '#0066c', textAlign: 'left', paddingLeft: 65 }}>
                                    <h1 style={{ fontWeight: 'bold', color: '#0066c' }}>SCORECARD</h1>
                                </Col>
                                <Col span={8} >
                                    <Dropdown style={{ background: '#525252' }} overlay={data} trigger={['click']}>
                                        <h1 className="ant-dropdown-link" style={{ paddingRight: 40, fontWeight: 'bold', color: '#0066c', fontFamily: 'Cochin', textAlign: 'right' }}>
                                            <Icon className="custom-icon" type="setting" />
                                        </h1>
                                    </Dropdown>

                                </Col>
                            </Row>
                        </Header>
                        <Content style={{ alignItems: 'center', margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
                            <Cards {...this.props} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                        </Footer>
                    </Layout>
                </Layout >
            </div >
        );
    }
}



export default DashBoard;

