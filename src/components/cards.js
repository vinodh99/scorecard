import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import './carousal.css'
const { Meta } = Card;

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div style={{ background: '#ECECEC', height: 620, }} >
                <Row>
                    <Col span={20}>
                        <Row gutter={16} style={{ paddingBottom: 10, paddingTop: 10, paddingLeft: 10 }}>
                            <Col span={12}>
                                <Card style={{ background: '#7D6DFB', textAlign: 'center', height: 200 }} bordered={false}>
                                    <h1>GTM</h1>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card style={{ background: '#35D385', textAlign: 'center', height: 200 }} bordered={false} >
                                    <h1>GQL</h1>
                                </Card>
                            </Col>

                        </Row>
                        <Row gutter={16} style={{ paddingLeft: 10 }}>
                            <Col span={12}>
                                <Card style={{ background: '#FECA4F', textAlign: 'center', height: 200 }} bordered={false}>
                                    <h2>
                                        GHC (IT Ops)
                            </h2>
                                    <h2>
                                        GHC (Developers)
                            </h2>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card style={{ background: '#33CCF4', textAlign: 'center', height: 200 }} bordered={false}>
                                    <h1>GFX</h1>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ paddingTop: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card style={{ background: '#87460a', textAlign: 'center', height: 180, justifyContent: 'center' }} bordered={false}>
                                    <h1>ROI</h1>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col Span={4} offset={20} style={{ textAlign: 'center', paddingBottom: 10, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                        <Card hoverable style={{ background: '#4286f4', textAlign: 'center', height: 600, align: 'middle' }} bordered={false} >

                            <h1>state</h1>
                        </Card>
                    </Col>
                </Row>

            </div >
        );
    }
}

export default Cards;