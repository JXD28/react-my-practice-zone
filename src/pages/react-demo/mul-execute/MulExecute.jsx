import { useState, useEffect, useRef } from 'react';
function MulExecute(props) {
    const [count1, setCount1] = useState();
    const [count2, setCount2] = useState();
    const [count3, setCount3] = useState();
    const [count, setCount] = useState(0);
    const timerId = useRef(null);

    //setInterval中使用hook
    useEffect(() => {
        timerId.current = setInterval(() => setCount((count) => ++count), 1000);
    }, []);

    // useEffect(() => {
    //     setCount1(1);
    //     setCount2(2);
    //     setCount3(3);
    // }, []);

    //1.在合成事件以及副作用函数中执行多次不同的hook,只更新一次
    useEffect(() => {
        setCount1(1);
        setCount2(2);
        setCount3(3);
    }, []);

    const reset = () => {
        setCount1(1);
        setCount2(2);
        setCount3(3);
    };

    //2.在合成事件以及副作用函数中执行多次相同的hook,只更新一次
    // useEffect(() => {
    //     setCount1(1);
    //     setCount1(2);
    //     setCount1(3);
    // }, []);

    const onClick = () => {
        setCount1((count1) => ++count1);
        setCount1((count1) => ++count1);
        setCount1((count1) => ++count1);
    };

    //3.setTimeOut内多次调用同一方法，会更新多次,到那时获取不到最新的state
    const onClick1 = () => {
        //触发二次渲染
        // setTimeout(() => {
        //     //多次调用相同或不通方法，都会更新多次
        //     // setCount1((count1) => ++count1);
        //     // setCount1((count1) => ++count1);
        //     // setCount1((count1) => ++count1);
        //     setCount1((count1) => ++count1);
        //     //获取不到最新的state
        //     console.log(
        //         '🚀 ~ file: MulExecute.jsx ~ line 48 ~ setTimeout ~ count1',
        //         count1
        //     );

        //     setCount2((count2) => ++count2);
        //     setCount3((count3) => ++count3);
        //     console.log('setTimeout');
        // }, 0);
        Promise.resolve('Promise').then((res) => {
            setCount1((count1) => ++count1);
            //获取不到最新的state
            console.log(
                '🚀 ~ file: MulExecute.jsx ~ line 67 ~ Promise.resolve ~ count1',
                count1
            );
            setCount1((count1) => ++count1);
            setCount1((count1) => ++count1);
            console.log(res);
        });
    };

    console.log('更新了。。。');
    return (
        <div>
            <div> {count1}</div>
            <div> {count2}</div>
            <div> {count3}</div>
            <div>
                <button onClick={onClick}>点击合成事件</button>
            </div>
            <div>
                <button onClick={onClick1}>点击(setTimeout)</button>
            </div>
            <div>setInterval: {count}</div>
            <div>
                <button
                    onClick={() => {
                        clearInterval(timerId.current);
                        setCount(0);
                    }}
                >
                    清除setInterval定时器
                </button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default MulExecute;
