import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import useTableRowRowSelection from './table-hooks/tableRowSelection';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];

for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

function CustomHooks(props) {
    const rowSelection = useTableRowRowSelection({ Table });

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
        ></Table>
    );
}

export default CustomHooks;
