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
            min: '28.3',
            rie: '1.04',
            coi: '20',
            rpy: '',
            fpy: '',
            gtm: 0,
            gql: 0,
            ghc1: 0,
            ghc2: 0,
            gfx: 0,
            rpm: '',
            ias: '',
            ish: '',
            das: '',
            ds: '',
            aar: '',
            roi: 0,
            por: '0.036',
            hpw: '0.16',
            tpr: '0.18',

        }
    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible
        });
    }
    handleMessageInput = (e) => {
        // e.persist();
        // this.setState({
        //     [e.target.name]: e.target.value
        // });
        const t = e.target;
        console.log(e)
        this.setState({ [e.target.name]: e.target.value }, () => {

            console.log(e)
            switch (t.name) {
                case 'rpy':
                case 'rie':
                    this.GTM();
                    break;
                case 'aar':
                case 'por':
                    this.GFX();
                    break;
                case 'ias':
                case 'hpw':
                case 'ish':
                    this.GHC1();
                    break;
                case 'das':
                case 'ds':
                case 'tpr':
                    this.GHC2();
                    break;
                case 'fpy':
                case 'rpm':
                case 'min':
                    this.GQL();
                    break;
                default:
                    this.calcutateROI();
            }
        });
    }

    calcutateROI = () => {

        let coi = parseFloat(this.state.coi, 10);
        if (this.state.gtm !== 0 && this.state.gql !== 0 && this.state.gfx !== 0 && this.state.ghc1 !== 0 && this.state.ghc2 !== 0 && coi)
            this.props.dispatch(updateroi(this.state.gtm, this.state.gfx, this.state.ghc1, this.state.ghc2, this.state.gql, coi))

    }
    GTM = () => {
        let rie = parseFloat(this.state.rie, 10);
        let rpy = parseFloat(this.state.rpy, 10);
        if (rpy !== 0 && !isNaN(rpy) && rie !== 0) {
            let gtm = rpy * rie;
            this.setState({
                gtm: gtm
            })
            this.calcutateROI();            // return gtm;
        }
    }
    GQL = () => {
        let fpy = parseFloat(this.state.fpy, 10);
        let rpm = parseFloat(this.state.rpm, 10);
        let min = parseFloat(this.state.min, 10);
        if (fpy !== 0 && !isNaN(fpy) && rpm !== 0 && !isNaN(fpy) && !isNaN(rpm)) {
            let gql = fpy * min * rpm;
            this.setState({
                gql: gql
            })
            this.calcutateROI();
        }
    }
    GHC1 = () => {
        let ias = parseFloat(this.state.ias, 10);
        let hpw = parseFloat(this.state.hpw, 10);
        let ish = parseFloat(this.state.ish, 10);
        if (ias !== 0 && !isNaN(ias) && ish !== 0 && !isNaN(ish)) {
            let ghc1 = ias * ish * hpw;
            this.setState({
                ghc1
            })
            this.calcutateROI();
        }

    }
    GHC2 = () => {
        let das = parseFloat(this.state.das, 10);
        let ds = parseFloat(this.state.ds, 10);
        let tpr = parseFloat(this.state.tpr, 10);
        if (das !== 0 && !isNaN(das) && ds !== 0 && !isNaN(ds)) {
            let ghc2 = das * ds * tpr;
            this.setState({
                ghc2
            })
        }
        this.calcutateROI();
    }

    GFX = () => {
        let aar = parseFloat(this.state.aar, 10);
        let por = parseFloat(this.state.por, 10);
        if (aar !== 0 && !isNaN(aar) && por !== 0) {
            let gfx = aar * por;
            this.setState({
                gfx
            })
            this.calcutateROI()
        }
    }
    onChange = (e, name) => {
        console.log(e)
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
            default:
                return 'not defined';
        }
    }
    onChange1 = () => {
        this.calcutateROI();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        // console.log(this.props)
        const { coi } = this.state;
        const { gtm } = this.state;
        const { gql } = this.state;
        const { ghc1 } = this.state;
        const { ghc2 } = this.state;
        const { gfx } = this.state;

        return (
            <div style={{ background: '#ECECEC', height: 750 }} >
                <Row gutter={5} >
                    <Col span={20} >
                        <Row className="row"
                            gutter={25}
                            style={{ paddingBottom: 25, paddingTop: 15, paddingLeft: 15 }} >
                            <Col span={12} >
                                <Card className="card"
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
                                                    // onPressEnter={this.GTM}
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
                                                <Popover
                                                    alignContent="center"
                                                    content={<p>(default value is set to {this.state.rie}, can be changed below)<br />
                                                        <Form.Item
                                                            // alignContent="center"
                                                            {...formItemLayout}
                                                            label="RIE"
                                                        >
                                                            {getFieldDecorator('number', {
                                                                rules: [{
                                                                    required: false,
                                                                }],
                                                            })(
                                                                <Input
                                                                    type="number"
                                                                    className="rpy-input"
                                                                    // height
                                                                    textAlign='center'
                                                                    name='rie'
                                                                    onChange={this.handleMessageInput}
                                                                    value={this.state.rie}
                                                                // onPressEnter={this.GTM}
                                                                />)}
                                                        </Form.Item>
                                                    </p>}
                                                    trigger="click"
                                                    visible={this.state.visible}
                                                    onVisibleChange={this.handleVisibleChange} >
                                                    <Icon type="question-circle-o" />
                                                </Popover><br /> < span style={{ fontWeight: 'bold' }} > {this.state.rie} </span></p >
                                        </Col> </Row > </Card>
                            </Col>
                            <Col span={12} >
                                <Card className="card"
                                    style={{ background: /*'#33CCF4'*/ '#BCC0C2', textAlign: 'center', height: 237 }}
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
                                                    onPressEnter={this.GFX}
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
                        <Row className="row" gutter={25}
                            style={{ paddingLeft: 15, paddingRight: 10, paddingBottom: 25 }} >
                            <Col span={12} >
                                <Card className="card" style={
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
                                            this.state.ghc1.toFixed(2)
                                        }
                                    </h4>
                                    <Row gutter={10} >
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
                                                    onPressEnter={this.GHC1}
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
                                                    onPressEnter={this.GHC1}
                                                    onChange={this.handleMessageInput}
                                                    placeholder='ish'
                                                    size="small"
                                                />
                                            </p>
                                        </Col>
                                    </Row >
                                    <h4 >
                                        GHC(Developers): {
                                            this.state.ghc2.toFixed(2)
                                        } </h4>
                                    <Row gutter={10} >
                                        <Col span={8}
                                            style={{ alignItems: 'center' }} >
                                            <p > Developer average salary <br />
                                                <Input
                                                    name="das"
                                                    type="number"
                                                    value={this.state.das}
                                                    onPressEnter={this.GHC2}
                                                    onChange={this.handleMessageInput}
                                                    placeholder="das"
                                                    className="aar-input"
                                                    size="small" />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > Dev staff<br />
                                                <Input
                                                    name="ds"
                                                    type="number"
                                                    value={this.state.ds}
                                                    onPressEnter={this.GHC2}
                                                    onChange={this.handleMessageInput}
                                                    placeholder="ds"
                                                    className="aar-input"
                                                    size="small" />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > 60 % TRICD {
                                                this.tooltip('tricd')
                                            } x 75 % TSRCA {this.tooltip('tsrca')} x 40 % TDSPR {this.tooltip('tdspr')} <br /> < span style={{ fontWeight: 'bold' }} > {this.state.tpr} minutes </span></p >
                                        </Col>
                                    </Row >
                                </Card>
                            </Col >
                            <Col span={12} >
                                <Card className="card" style={{
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
                                                    onPressEnter={this.GQL}
                                                    onChange={this.handleMessageInput}
                                                    size="small"
                                                    placeholder='fpy' />
                                            </p>
                                        </Col>
                                        <Col span={8} >
                                            <p > Average Minutes to recover difference <br /> < span style={{ fontWeight: 'bold' }} > {this.state.min}
                                                minutes </span></p >
                                        </Col>
                                        <Col span={8}
                                            style={{ textAlign: 'center' }} >
                                            <p > Revenue per minute <br />
                                                <Input
                                                    className='aar-input'
                                                    name="rpm"
                                                    type="number"
                                                    value={this.state.rpm}
                                                    onPressEnter={this.GQL}
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
                                <Card className="card"
                                    style={{
                                        background: '#535353a',
                                        textAlign: 'center',
                                        height: 300,
                                        justifyContent: 'center',
                                        borderRadius: 10,
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
                    </Col >
                    <Col Span={4}
                        offset={20}
                        style={{
                            textAlign: 'center',
                            paddingBottom: 10,
                            paddingTop: 15,
                            paddingLeft: 5,
                            // paddingRight: 10
                        }
                        } >
                        <div>
                            <Card className="card" hoverable style={
                                {
                                    background: 'grey',
                                    textAlign: 'center',
                                    alignContent: 'center',
                                    height: 915,
                                    borderRadius: '10px'
                                }
                            }
                                bordered={false} >
                                <h1>Calculated ROI values</h1>
                                <div className='table'>{<RoiTable {...this.props} />}</div>
                            </Card >
                        </div>
                        {/* </div> */}
                    </Col>
                </Row >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('hello ' + JSON.stringify(state))
    console.log(state)
    return {
        roi: state.updatedRoi.roi,
        roiValues: state.updatedRoi.calcValues
    }
}
const wrappedCards = Form.create()(Cards)

export default connect(mapStateToProps)(wrappedCards);