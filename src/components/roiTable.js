import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';

class RoiTable extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const dataSource = this.props.roiValues;
        console.log(dataSource)
        const columns = [{
            title: 'ROI',
            dataIndex: 'name',
        }, {
            title: 'Time',
            dataIndex: 'time'
        }];
        return (
            <div>
                <p><Table className='table' dataSource={dataSource} columns={columns} /></p>
            </div>
        )
    }
}

export default RoiTable;