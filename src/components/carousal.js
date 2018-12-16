import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './carousal.css';
import { Carousel, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

function onChange(a, b, c) {
    console.log(a, b, c);
}
class carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    handleMessageInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log("xyz"+this.state.firstName)
    }
    render() {

        return (
            <Carousel afterChange={onChange}>
                <div>
                    <FormItem>
                        <h4>

                            GTM =  <Input
                                name="value"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleMessageInput}
                            />
                        </h4>


                    </FormItem>
                </div>
                <div><h3>GHC</h3></div>
                <div><h3>GFX</h3></div>
                <div><h3>GQL</h3></div>
            </Carousel >
        );
    }
}

export default carousel;
