import React, { Component } from 'react';
import './index.css';
class ClassSetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 0,
            count2: 0,
            count3: 0,
            objVal: {
                count1: 1,
                count2: 2,
            },
        };
    }

    onClick = () => {
        //1.合成事件和钩子函数中，多次更新同一个属性，合并更新
        //2.this.state获取不到最新值->setState'异步更新'
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
    };

    onClick1 = () => {
        //1.原生事件和setTimeOut中，不会合并更新
        //2.this.state是最新的值
        setTimeout(() => {
            this.setState({ count1: this.state.count1 + 1 });
            //这里的this.state是最新的值
            console.log('this.state.count1', this.state.count1);
            this.setState({ count1: this.state.count1 + 1 });
            this.setState({ count1: this.state.count1 + 1 });
        }, 0);
    };

    onClick2 = () => {
        const { objVal } = this.state;
        objVal.count1 += 1;
        this.setState({ objVal });
    };

    resetOnClick = () => {
        this.setState({ count0: 0 });
        this.setState({ count1: 0 });
        this.setState({ count2: 0 });
        this.setState({ count3: 0 });
    };

    componentDidMount() {
        //1.合成事件和钩子函数中，多次更新同一个属性，合并更新
        //2.this.state获取不到最新值->setState'异步更新'
        this.setState({ count2: this.state.count2 + 1 });
        this.setState({ count2: this.state.count2 + 1 });
        this.setState({ count2: this.state.count2 + 1 });
        //---------------绑定原生事件--------------------------------
        //1.原生事件和setTimeOut中，不会合并更新
        //2.this.state是最新的值
        const btn = document.getElementById('button');
        btn.addEventListener('click', () => {
            this.setState({ count3: this.state.count3 + 1 });
            console.log('addEventListener', this.state.count3);
            this.setState({ count3: this.state.count3 + 1 });
            this.setState({ count3: this.state.count3 + 1 });
        });
    }

    render() {
        const { objVal } = this.state;
        // console.log('objVal', objVal);
        return (
            <>
                <section className='class'>
                    <div>count :{this.state.count}</div>
                    <button onClick={this.onClick}>点击(合成事件)</button>
                </section>
                <section className='class'>
                    <div>count1 :{this.state.count1}</div>
                    <button onClick={this.onClick1}>点击(setTimeout)</button>
                </section>
                <section className='class'>
                    <div>CDM count2:{this.state.count2}</div>
                </section>
                <section className='class'>
                    <div>addEventListener :{this.state.count3}</div>
                    <button id='button'>原生事件</button>
                </section>
                <section className='class'>
                    <div>
                        合并数据 count1 :{this.state.objVal.count1}count2 :
                        {this.state.objVal.count2}
                    </div>
                    <button onClick={this.onClick2}>
                        this.setState合并数据
                    </button>
                </section>
                <div>
                    <button onClick={this.resetOnClick}> reset </button>
                </div>
            </>
        );
    }
}

export default ClassSetState;
