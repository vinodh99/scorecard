import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './carousal.css';
import { Carousel, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill';
import { Col, Row, Slider, Switch } from 'antd';


// function onChange(a, b, c) {
//     console.log(a, b, c);
// }

class carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coi: '',
            rpy: '',
            fpy: 0,
            gtm: '',
            gql: '',
            ghc1: '',
            ghc2: '',
            gfx: '',
            rpm: 0,
            ias: '',
            ish: '',
            das: '',
            ds: '',
            aar: '',

        }
    }


    handleMessageInput = (e) => {
        this.GQL()
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log("xyz"+this.state.firstName)
    }


    GTM = () => {
        // let gtm=parse
        let gtm = this.state.rpy * (115 / 110);
        // this.setState({
        //     gtm: gtm
        // })
        return gtm;
    }
    GQL = () => {
        if (this.state.fpy !== 0 && this.state.rpm !== 0) {
            let gql = this.state.fpy * (28.3) * this.state.rpm;
            console.log(gql)
            this.setState({
                gql: gql
            })
            // return gql;
        }
        else {
            this.setState({
                gql: 0
            })
        }
    }
    GHC1 = () => {
        let ghc1 = this.state.ias * this.state.ish * 0.16;
        // this.setState({
        //     ghc1: ghc1
        // })
        return ghc1;
    }
    GHC2 = () => {
        let ghc2 = this.state.das * this.state.ds * 0.18;
        // this.setState({
        //     ghc2: ghc2
        // })
        return ghc2
    }

    GFX = () => {
        let gfx = this.state.aar * 0.036;
        // this.setState({
        //     gfx: gfx
        // })
        return gfx

    }
    ROI = (gtm, gql, ghc1, ghc2, gfx) => {
        return (((gtm + gql + ghc1 + ghc2 + gfx) - this.state.inputValue) / this.state.inputValue) * 100;
    }

    onChange = (e, name) => {
        this.setState({
            [name]: e
        });
    }
    render() {
        const { coi } = this.state;
        const { gtm } = this.state;
        const { gql } = this.state;
        const { ghc1 } = this.state;
        const { ghc2 } = this.state;
        const { gfx } = this.state;




        return (

            <Carousel >
                <div>

                    <FormItem>
                        <h1>
                            GTM = <Input
                                name="rpy"
                                type="number"
                                value={this.state.rpy}
                                onChange={this.handleMessageInput}
                                placeholder='revenue per year'
                            /> X 115/110 = $ {this.state.gtm}
                        </h1>
                    </FormItem>

                </div>
                <div>
                    <h1>
                        GQL = <Input
                            name="fpy"
                            type="number"
                            value={this.state.fpy}
                            onChange={this.handleMessageInput}
                            placeholder='failures per year'
                        />X 28.3 minutes X $ <Input
                            name="rpm"
                            type="number"
                            value={this.state.rpm}
                            onChange={this.handleMessageInput}
                            placeholder="Revenue per minute"
                        /> = $ {this.state.gql}
                    </h1>

                </div>
                <div>
                    <h1>
                        GHC(IT Ops)= <Input
                            name="ias"
                            type="number"
                            value={this.state.ias}
                            onChange={this.handleMessageInput}
                            placeholder='IT AVG salary'
                        />X <Input
                            name="ish"
                            type="number"
                            value={this.state.ish}
                            onChange={this.handleMessageInput}
                            placeholder="DEV staff"
                        /> X 0.16 = $ {this.GHC1()}
                    </h1>
                    <h1>
                        GHC(Developers)= <Input
                            name="das"
                            type="number"
                            value={this.state.das}
                            onChange={this.handleMessageInput}
                            placeholder='Developer AVG salary'
                        />X <Input
                            name="ds"
                            type="number"
                            value={this.state.ds}
                            onChange={this.handleMessageInput}
                            placeholder="DEV staff"
                        /> X 0.18 = $ {this.GHC2()}
                    </h1>
                </div>
                <div>
                    <h1>
                        GFX = <Input
                            name="aar"
                            type="number"
                            value={this.state.gtm}
                            onChange={this.handleMessageInput}
                            placeholder='revenue per year'
                        /> X 0.036 = $ {this.GFX()}
                    </h1>
                </div>
                <div className='div'>
                    <Row>
                        <Col span={8} className="col1">
                            <h1>
                                ROI =
                        </h1>
                        </Col>
                        <Col span={8} className="col2">
                            <Row span={12}>
                                <h2>
                                    (Total Gains[A]-Cost of investment) X 100
                                </h2>
                                <hr />
                                <h2>
                                    Cost of investment
                                </h2>

                            </Row>
                            <Row span={12}>
                                = {this.ROI(this.state.gtm, this.state.gql, this.state.ghc1, this.state.ghc2, this.state.gfx)}
                            </Row>

                        </Col>
                        <Col span={8}>
                            <div>
                                Cost Of Investment<Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "coi")}
                                    name="coi"
                                    value={typeof coi === 'number' ? coi : 0}
                                    step={0.01}
                                />
                                GTM<Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "gtm")}
                                    name='gtm'
                                    value={typeof gtm === 'number' ? gtm : 0}
                                    step={0.01}
                                />
                                GQL<Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "gql")}
                                    name='gql'
                                    value={typeof gql === 'number' ? gql : 0}
                                    step={0.01}
                                />
                                GHC (Developers)<Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "ghc1")}
                                    name='ghc1'
                                    value={typeof ghc1 === 'number' ? ghc1 : 0}
                                    step={0.01}
                                />
                                GHC (IT ops)<Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "ghc2")}
                                    name='ghc2'
                                    value={typeof ghc2 === 'number' ? ghc2 : 0}
                                    step={0.01}
                                />
                                GFX <Slider
                                    className="slider"
                                    min={1}
                                    max={100}
                                    onChange={e => this.onChange(e, "gfx")}
                                    name='gfx'
                                    value={typeof gfx === 'number' ? gfx : 0}
                                    step={0.01}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Carousel >
        );
    }
}

export default carousel;
