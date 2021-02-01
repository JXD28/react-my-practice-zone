import { useState, useEffect } from 'react';
function MulExecute(props) {
    const [execte1, setExecte1] = useState();
    const [execte2, setExecte2] = useState();
    const [execte3, setExecte3] = useState();

    // useEffect(() => {
    //     setExecte1(1);
    //     setExecte2(2);
    //     setExecte3(3);
    // }, []);

    //1.在合成事件以及副作用函数中执行多次不同的hook,只更新一次
    useEffect(() => {
        setExecte1(2);
        setExecte2(3);
        setExecte3(4);
    }, []);

    const reset = () => {
        setExecte1(1);
        setExecte2(2);
        setExecte3(3);
    };

    //2.在合成事件以及副作用函数中执行多次相同的hook,只更新一次
    // useEffect(() => {
    //     setExecte1(1);
    //     setExecte1(2);
    //     setExecte1(3);
    // }, []);

    // const onClick = () => {
    //     setExecte1((execte1) => ++execte1);
    //     setExecte1((execte1) => ++execte1);
    //     setExecte1((execte1) => ++execte1);
    // };

    //3.setTimeOut内多次调用同一方法，会更新多次
    const onClick = () => {
        //触发二次渲染
        setTimeout(() => {
            //多次调用相同或不通方法，都会更新多次
            // setExecte1((execte1) => ++execte1);
            // setExecte1((execte1) => ++execte1);
            // setExecte1((execte1) => ++execte1);
            setExecte1((execte1) => ++execte1);
            setExecte2((execte2) => ++execte2);
            setExecte3((execte3) => ++execte3);
            console.log('setTimeout');
        }, 0);
        Promise.resolve('Promise').then((res) => {
            setExecte1((execte1) => ++execte1);
            setExecte1((execte1) => ++execte1);
            setExecte1((execte1) => ++execte1);
            console.log(res);
        });
    };

    console.log('更新了。。。');
    return (
        <div>
            <div> {execte1}</div>
            <div> {execte2}</div>
            <div> {execte3}</div>
            <div>
                <button onClick={onClick}>点击(合成事件+setTimeout)</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default MulExecute;
