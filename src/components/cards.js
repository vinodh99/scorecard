import React, { Component } from 'react';
import { Card, Row, Col, Slider, InputNumber, Form, Input, Tooltip, Icon, Popover } from 'antd';
import './cards.css';
import './carousal.css';
import { updateroi } from '../actions/updateroi';
import { connect } from 'react-redux';
import RoiTable from './roiTable';
const { Meta } = Card;
const FormItem = Form.Item;

class Cards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            min: 28.3,
            rie: 115 / 100,
            coi: 0,
            rpy: 0,
            fpy: 0.0,
            gtm: 0,
            gql: 0.0,
            ghc1: 0,
            ghc2: 0,
            gfx: 0,
            rpm: 0,
            ias: 0,
            ish: 0,
            das: 0,
            ds: 0.18,
            aar: 0,
            roi: 0,
            por: 0.036,
            hpw: 0.16,
            tpr: 0.18,

        }
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible
        });
    }
    handleMessageInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.GTM()
        this.GQL()
        this.GHC1()
        this.GHC2()
        this.GFX()
    }


    GTM = () => {
        // let gtm=parse
        if (this.state.rpy !== 0) {
            let gtm = this.state.rpy * (115 / 110);
            this.setState({
                gtm: gtm
            })
            this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, this.state.coi))
            // return gtm;
        }

    }
    GQL = () => {
        if (this.state.fpy !== 0 && this.state.rpm !== 0) {
            let gql = this.state.fpy * (28.3) * this.state.rpm;
            this.setState({
                gql: gql
            })
            this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, this.state.coi))
        }
    }
    GHC1 = () => {
        if (this.state.ias !== 0 && this.state.ish !== 0) {
            let ghc1 = this.state.ias * this.state.ish * 0.16;
            this.setState({
                ghc1: ghc1
            })
            this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, this.state.coi))
        }

    }
    GHC2 = () => {
        if (this.state.das !== 0 && this.state.ds !== 0) {
            let ghc2 = this.state.das * this.state.min * 0.18;
            this.setState({
                ghc2: ghc2
            })
            // return ghc2
        }

    }

    GFX = () => {
        if (this.state.aar !== 0) {

            let gfx = this.state.aar * 0.036;
            this.setState({
                gfx: gfx
            })
            this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, this.state.coi))
        }

    }
    onChange = (e, name) => {
        this.setState({
            [name]: e
        });
    }


    tooltipDisplay = (def) => {
        return (
            <Tooltip placement="topLeft" title={def} >
                <Icon type="exclamation-circle" />
            </Tooltip>
        )
    }

    tooltip = (def) => {
        switch (def) {
            case 'tricd':
                return this.tooltipDisplay('Time reduction by implementing continuous delivery');
            case 'tsrca':
                return this.tooltipDisplay('Time spent on root cause analysis');
            case 'tdspr':
                return this.tooltipDisplay('Time developers spend on problem resolution');
        }
    }
    onChange1 = () => {
        console.log("hello")
        this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, this.state.coi))

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
        };
        const { rpy } = this.state;
        const { coi } = this.state;
        const { gtm } = this.state;
        const { gql } = this.state;
        const { ghc1 } = this.state;
        const { ghc2 } = this.state;
        const { gfx } = this.state;

        return (
            <div style={{ background: '#ECECEC', height: 750 }} >
                <Row gutter={5} >
                    <Col span={
                        20
                    } >
                        <Row className="row"
                            gutter={5}
                            style={{ paddingBottom: 5, paddingTop: 10, paddingLeft: 15 }} >
                            <Col span={12} >
                                <Card className='card'
                                    style={{ background: '#BCC0C2', textAlign: 'center', height: 237 }}
                                    bordered={false} >
                                    <p>
                                        Revenue gains from accelerated time to market of new functionality <br /> (GTM) </p>
                                    <h1 >
                                        GTM: {
                                            this.state.gtm.toFixed(2)
                                        }
                                    </h1>
                                    <Row >
                                        <Col span={
                                            12
                                        }
                                            style={
                                                {
                                                    alignItems: 'center'
                                                }
                                            } >
                                            <p > Revenue Per Year < br />

                                                { /* <Col span={6} offset={9} > */}
                                                <Input name="rpy"
                                                    type="number"
                                                    className="rpy-input"
                                                    value={this.state.rpy}
                                                    onChange={this.handleMessageInput}
                                                    placeholder="rpy"
                                                    size="small"
                                                />
                                                { /* </Col> */}
                                            </p>
                                        </Col >
                                        <Col span={
                                            12
                                        } >
                                            <p> Revenue Increase Estimate
                        <Popover content={<a onClick={this.hide} > (It is set to 115 / 110 bydefault) </a>}
                                                    title="Set the value of Revenue Increase Estimate"
                                                    trigger="click"
                                                    visible={this.state.visible}
                                                    onVisibleChange={this.handleVisibleChange} >
                                                    <Icon type="question-circle-o" />
                                                </Popover><br /> < span style={{ fontWeight: 'bold' }} > {this.state.rie} </span></p >
                                        </Col> </Row > </Card>
                            </Col>
                            <Col span={12} >
                                <Card style={{ background: /*'#33CCF4'*/ '#BCC0C2', textAlign: 'center', height: 237 }}
                                    bordered={false} >
                                    <p > Gain from flexibility in the IT environment <br /> (GFX) </p>
                                    <h1 > GFX: {this.state.gfx.toFixed(2)} </h1>
                                    <Row >
                                        <Col span={12}
                                            style={{ alignItems: 'center' }} >
                                            <p> Application Annual Revenue <br />
                                                <Input
                                                    name="aar"
                                                    type="number"
                                                    className="aar-input"
                                                    value={this.state.aar}
                                                    onChange={this.handleMessageInput}
                                                    placeholder="aar"
                                                    size="small"
                                                />
                                            </p>
                                        </Col >
                                        <Col span={12} >
                                            <p> 72 % Avg TCO reduction x5 % cost of IT as percentage of revenue <br /> < span style={{ fontWeight: 'bold' }} > {this.state.por} </span></p>
                                        </Col>
                                    </Row >
                                </Card>
                            </Col >
                        </Row>
                        <Row className="row"
                            gutter={
                                5
                            }
                            style={
                                {
                                    paddingLeft: 15
                                }
                            } >
                            <Col span={12} >
                                <Card style={
                                    {
                                        background: '#BCC0C2' /*'#FECA4F'*/,
                                        textAlign: 'center',
                                        height: 320
                                    }
                                }
                                    bordered={
                                        false
                                    }>
                                    <p >
                                        Gains from enhanced IT team productivity and cost reduction of IT headcount waste(GHC) </p>
                                    <h4 >
                                        GHC(IT Ops): {
                                            this.state.ghc1
                                        }
                                    </h4>
                                    <Row gutter={
                                        10
                                    } >
                                        <Col span={8}
                                            style={
                                                {
                                                    alignItems: 'center'
                                                }
                                            } >
                                            <p> IT average salary <br /> { /* <Col span={8} offset={7} style={{ alignItems: 'center' }}> */}
                                                <Input
                                                    name="ias"
                                                    className="ias-input"
                                                    type="number"
                                                    value={this.state.ias}
                                                    onChange={this.handleMessageInput}
                                                    placeholder='ias'
                                                    size="small" />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > 7.2 / 45 saving hours per week / total hours <br /> < span style={{ fontWeight: 'bold' }} > {this.state.hpw} </span></p >
                                        </Col>
                                        <Col span={8} >
                                            <p > IT staff headcount <br />
                                                <Input className='aar-input'
                                                    name="ish"
                                                    type="number"
                                                    value={this.state.ish}
                                                    onChange={this.handleMessageInput}
                                                    placeholder='ish'
                                                    size="small"
                                                />
                                            </p>
                                        </Col>
                                    </Row >
                                    <h4 >
                                        GHC(Developers): {
                                            this.state.ghc2
                                        } </h4> <Row gutter={10} >
                                        <Col span={8}
                                            style={{ alignItems: 'center' }} >
                                            <p > Developer average salary <br />
                                                <Input
                                                    name="das"
                                                    type="number"
                                                    value={this.state.das}
                                                    onChange={this.handleMessageInput}
                                                    placeholder="das"
                                                    className="aar-input"
                                                    size="small" />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > Average Minutes to recover difference < br /> < span style={{ fontWeight: 'bold' }} > {this.state.min} minutes </span></p >
                                        </Col>
                                        <Col span={8} >
                                            <p > 60 % TRICD {
                                                this.tooltip('tricd')
                                            }
                                                x75 % TSRCA {this.tooltip('tsrca')}
                                                x40 % TDSPR {this.tooltip('tdspr')} <br /> < span style={{ fontWeight: 'bold' }} > {this.state.tpr} minutes </span></p >
                                        </Col>
                                    </Row >
                                </Card>
                            </Col >
                            <Col span={12} >
                                <Card style={{
                                    background: /*'#35D385'*/ '#BCC0C2',
                                    textAlign: 'center',
                                    height: 320
                                }
                                }
                                    bordered={
                                        false
                                    } >
                                    <p > Gains from cost reduction of application failures resulting from increased quality(GQL) </p>
                                    <h1> GQL: {this.state.gql.toFixed(2)}
                                    </h1>
                                    <Row gutter={10} >
                                        <Col span={8}
                                            style={
                                                {
                                                    alignItems: 'center'
                                                }
                                            } >
                                            <p > Failures Per Year <br />
                                                <Input
                                                    className='aar-input'
                                                    name="fpy"
                                                    type="number"
                                                    value={this.state.fpy}
                                                    onChange={this.handleMessageInput}
                                                    size="small"
                                                    placeholder='fpy' />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > Average Minutes to recover difference <br /> < span style={
                                                {
                                                    fontWeight: 'bold'
                                                }
                                            } > {
                                                    this.state.min
                                                }
                                                minutes </span></p >
                                        </Col>
                                        <Col span={8}
                                            style={
                                                {
                                                    textAlign: 'center'
                                                }
                                            } >
                                            <p > Revenue per minute <br /> { /* <Col span={10} offset={7} style={{ textAlign: 'center' }}> */} { /* <Row> */}
                                                <Input
                                                    className='aar-input'
                                                    name="rpm"
                                                    type="number"
                                                    value={this.state.rpm}
                                                    onChange={this.handleMessageInput}
                                                    size="small"
                                                    placeholder='rpm' />
                                                <br /> Minutes </p>
                                        </Col >
                                    </Row>
                                </Card >
                            </Col>
                        </Row >
                        <Row className="row" gutter={5}
                            style={
                                {
                                    paddingTop: 5,
                                    paddingLeft: 15
                                }
                            } >
                            <Col >
                                <Card className="card22"
                                    style={{
                                        background: '#535353a',
                                        textAlign: 'center',
                                        height: 180,
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        height: '300'
                                    }
                                    }
                                    bordered={
                                        false
                                    } > { /* <div> */}
                                    <p >
                                        Return Of Investment
                                    </p>
                                    <h1 > ROI: {
                                        this.props.roi.toFixed(2)
                                    } </h1>
                                    <Row >
                                        <Col span={12} >
                                            <p > Cost Of Investment: </p>
                                            <Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "coi")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name="coi"
                                                value={typeof coi === 'number' ? coi : 0}
                                                step={0.01}
                                            />
                                            <p > GTM </p><Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "gtm")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name='gtm'
                                                value={typeof gtm === 'number' ? gtm : 0
                                                }
                                                step={0.01}
                                            />
                                            <p > GQL </p><Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "gql")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name='gql'
                                                value={typeof gql === 'number' ? gql : 0}
                                                step={0.01}
                                            />
                                        </Col >
                                        <Col span={12} >
                                            < p > GHC(Developers) </p><Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "ghc1")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name='ghc1'
                                                value={typeof ghc1 === 'number' ? ghc1 : 0}
                                                step={0.01}
                                            />
                                            <p > GHC(IT ops) </p>
                                            <Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "ghc2")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name='ghc2'
                                                value={typeof ghc2 === 'number' ? ghc2 : 0}
                                                step={0.01}
                                            />
                                            <p > GFX </p> <Slider
                                                className="slider"
                                                min={1}
                                                max={1000}
                                                onChange={e => this.onChange(e, "gfx")}
                                                onAfterChange={e => this.onChange1(e)}
                                                name='gfx'
                                                value={typeof gfx === 'number' ? gfx : 0}
                                                step={0.01}
                                            />
                                        </Col >
                                    </Row>
                                </Card>
                            </Col >
                        </Row>
                    </Col > <Col Span={4}
                        offset={20}
                        style={{
                            textAlign: 'center',
                            paddingBottom: 10,
                            paddingTop: 10,
                            paddingLeft: 5,
                            paddingRight: 10
                        }
                        } >
                        <Card hoverable style={
                            {
                                background: 'grey',
                                textAlign: 'center',
                                height: 885,
                                align: 'middle',
                                borderRadius: '10px'
                            }
                        }
                            bordered={
                                false
                            } >

                            <h1 > {<RoiTable {...this.props} />} </h1>
                        </Card >
                    </Col>
                </Row >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    console.log('hello ' + JSON.stringify(state))
    return {
        roi: state.updatedRoi.roi,
        roiValues: state.calcValues
    }
}
const wrappedCards = Form.create()(Cards)

export default connect(mapStateToProps)(wrappedCards);