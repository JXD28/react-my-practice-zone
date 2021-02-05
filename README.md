# 前端相关的实践练习都在这里

## React 相关

### 1. useState 与 this.setState

-   引用数据类型：useState 直接替换，this.setState 会合并数据

-   渲染次数：

    -   setTimeOut,Promise: useState 和 this.setState 执行几次重渲染几次
    -   合成事件和钩子函数中：所有 useState 和 this.setState 都只触发一次重渲染

-   表现为同步异步问题：

    -   setTimeOut,Promise: this.setState 更新之后会拿到最新的 this.state.XXX; useState 更新之后不会拿到
    -   合成事件和钩子函数中： 所有 useState 和 this.setState 更新之后都不能拿到最新的 state 值

-   拿到最新值的方法：
    -   hook：
        -   1.使用 useEffect 监听
        -   2.使用 useRef 来保存更新-setState(myRef.current+1)
        -   3.依赖项使用 setState((state)=>state++)
    -   this.setState
        -   1.使用回调函数：this.setState({val:1},()=>console.log(this.state.val))
        -   2.在 componentDidUpdate 中调用
        -   3.setTimeOut 中

### 2.为什么 this.setState 是'异步的'

-   状态提升更安全
    -   这是因为同步模型中，虽然 this.state 会立即更新，但是 this.props 并不会。而且在没有重渲染父组件的情况下，我们不能立即更新 this.props。如果要立即更新 this.props （也就是立即重渲染父组件），就必须放弃批处理（根据情况的不同，性能可能会有显著的下降）。

### 3.多个 useState 和 this.setState 在原生事件和 setTimeOut 中不会合并，再更新

-   可能原因是这些方法是原生的，react 没有对其进行优化
