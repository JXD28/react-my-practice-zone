import { useState, useEffect } from 'react';
function MulExecute(props) {
    const [execte1, setExecte1] = useState();
    const [execte2, setExecte2] = useState();
    const [execte3, setExecte3] = useState();

    useEffect(() => {
        setExecte1(1);
        setExecte2(2);
        setExecte3(3);
    }, []);
    const onClick = () => {
        setExecte1((execte1) => ++execte1);
        setExecte2((execte2) => ++execte2);
        setExecte3((execte3) => ++execte3);
    };
    console.log('更新了。。。');
    return (
        <div>
            <div> {execte1}</div>
            <div> {execte2}</div>
            <div> {execte3}</div>
            <div>
                <button onClick={onClick}>点击</button>
            </div>
        </div>
    );
}

export default MulExecute;
