import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import './cards.css'
import './carousal.css'
const { Meta } = Card;

class Cards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coi: 0,
            rpy: 0,
            fpy: 0,
            gtm: 0,
            gql: 0,
            ghc1: 0,
            ghc2: 0,
            gfx: 0,
            rpm: 0,
            ias: 0,
            ish: 0,
            das: 0,
            ds: 0,
            aar: 0,

        }
    }


    render() {

        return (
            <div style={{ background: '#ECECEC', height: 620 }} >
                <Row>
                    <Col span={20}>
                        <Row gutter={16} style={{ paddingBottom: 10, paddingTop: 10, paddingLeft: 10 }}>
                            <Col span={12}>
                                <Card className='card' style={{ background: '#7D6DFB', textAlign: 'center', height: 200 }} bordered={false}>
                                    <p >
                                        Revenue gains from accelerated time to market of new functionality (GTM)
                                    </p>
                                    <h1>
                                        GTM:
                                    </h1>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card style={{ background: '#35D385', textAlign: 'center', height: 200 }} bordered={false} >
                                    <p>Gains from cost reduction of application failures resulting from increased quality (GQL)</p>
                                    <h1>GQL:</h1>
                                </Card>
                            </Col>

                        </Row>
                        <Row gutter={16} style={{ paddingLeft: 10 }}>
                            <Col span={12}>
                                <Card style={{ background: '#FECA4F', textAlign: 'center', height: 200 }} bordered={false}>
                                    <p>
                                        Gains from enhanced IT team productivity and cost reduction of IT headcount waste (GHC)
                                    </p>
                                    <h2>
                                        GHC (IT Ops):
                                    </h2>
                                    <h2>
                                        GHC (Developers):
                                    </h2>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card style={{ background: '#33CCF4', textAlign: 'center', height: 200 }} bordered={false}>
                                    <p>Gain from flexibility in the IT environment (GFX)</p>
                                    <h1>GFX:</h1>
                                </Card>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ paddingTop: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card style={{ background: '#87460a', textAlign: 'center', height: 180, justifyContent: 'center' }} bordered={false}>
                                    <p>
                                        Return Of Investment
                                </p>
                                    <h1>ROI:</h1>
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