import { useState, useEffect } from 'react';

function StoreFunction() {
    const changeF = () => {
        return [123222];
    };
    //01存储函数会返回执行之后的值
    const [change, setChange] = useState(changeF);
    const [data, setData] = useState([]);
    const addList = () => {
        data.push('Hello React');
        console.log(
            '🚀 ~ file: StoreObject.js ~ line 12 ~ addList ~ data',
            data
        );
        setData([...data]);
    };

    const deleteList = () => {
        data.pop();
        setData([...data]);
    };

    const setTimeoutOnClick = () => {
        setTimeout(() => {
            data.push('Hello React');
            setData([...data]);
        }, 0);
    };

    //02useState 每次产生的数据是 Immutable 的,地址每次都会变
    useEffect(() => {
        console.log('data更新了');
    }, [data]);

    console.log(change);

    return (
        <div>
            {data.map((item, index) => (
                <p key={index}>
                    {index} {item}
                </p>
            ))}
            <button onClick={addList}>添加List</button>
            <br></br>
            <button onClick={deleteList}>删除List</button>
            <br></br>
            <button onClick={setTimeoutOnClick}>setTimeOut添加List</button>
        </div>
    );
}

export default StoreFunction;
