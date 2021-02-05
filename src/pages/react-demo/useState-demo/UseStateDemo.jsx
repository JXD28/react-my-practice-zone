//手写useState
import { myUseState } from './react-useState';
import { useEffect } from 'react';

function UseStateDemo() {
    const [count1, setCount1] = myUseState();
    const [count2, setCount2] = myUseState();
    const [count3, setCount3] = myUseState();

    useEffect(() => {
        setCount1(1);
        setCount2(2);
        setCount3(3);
        return () => console.log('组件销毁');
    }, []);

    //return 在每次重新渲染的时候都会执行
    useEffect(() => {
        console.log('effect');
        return () => console.log('return effect');
    });

    // useEffect(() => {
    //     effect;
    //     return () => {
    //         cleanup;
    //     };
    // }, [input]);

    const onClick = () => {
        setCount1(count1 + 1);
        setCount2(count2 + 1);
        setCount3(count3 + 1);
    };
    console.log('myUseState更新了。。。');
    return (
        <div>
            <div>手写useState</div>
            <div> {count1}</div>
            <div> {count2}</div>
            <div> {count3}</div>
            <div>
                <button onClick={onClick}>点击</button>
            </div>
        </div>
    );
}

export default UseStateDemo;
