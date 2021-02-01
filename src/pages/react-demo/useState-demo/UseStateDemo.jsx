//手写useState
import { myUseState } from './react-useState';
import { useEffect } from 'react';

function UseStateDemo() {
    const [execte1, setExecte1] = myUseState();
    const [execte2, setExecte2] = myUseState();
    const [execte3, setExecte3] = myUseState();

    useEffect(() => {
        setExecte1(1);
        setExecte2(2);
        setExecte3(3);
        return () => console.log('组件销毁');
    }, []);

    const onClick = () => {
        setExecte1(execte1 + 1);
        setExecte2(execte2 + 1);
        setExecte3(execte3 + 1);
    };
    console.log('myUseState更新了。。。');
    return (
        <div>
            <div>手写useState</div>
            <div> {execte1}</div>
            <div> {execte2}</div>
            <div> {execte3}</div>
            <div>
                <button onClick={onClick}>点击</button>
            </div>
        </div>
    );
}

export default UseStateDemo;
