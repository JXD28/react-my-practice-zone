import { useState } from 'react';

function useTableRowRowSelection({ Table }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter(
                        (key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        }
                    );
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter(
                        (key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        }
                    );
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return rowSelection;
}

export default useTableRowRowSelection;
