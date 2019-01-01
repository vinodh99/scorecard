import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table, Divider, Tag } from 'antd';


class RoiTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const dataSource = this.props.coi;
        console.log(dataSource)
        const columns = [{
            title: 'ROI',
            dataIndex: 'ROI',
            key: 'Roi',
        }, {
            title: 'time',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }];
        return (
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}

export default RoiTable;