import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Radio, Checkbox } from 'antd';
import { MessageImg, MessageSys, MessageText } from '../message-item/Message';
import UserInfo from '../userInfo/UserInfo';
import imgUrl from '../../../assets/newYear.jpg';
import uuidV4 from 'uuid/dist/v4';
const { TextArea } = Input;

const actions = {
    1: MessageText,
    2: MessageImg,
    3: MessageSys,
};

function SendMessage(props) {
    const [type, setType] = useState(1);
    const [isSelf, setIsSelf] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const newMessageFlow = useRef(null);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setType(e.target.value);
    };

    const onChangeIsSelf = (e) => {
        console.log(`onChangeIsSelf = ${e.target.checked}`);
        setIsSelf(e.target.checked);
    };

    const sendInfo = () => {
        console.log('type', type, inputValue, isSelf, props.messageFlow);
        const messageFlow = props.messageFlow;
        const newMessage = createMessage(
            type === 2 ? imgUrl : inputValue,
            type,
            isSelf,
            messageFlow
        );
        const newMessageDom = newMessage.showMessage();
        const addUndo = (
            <div key={uuidV4()} onClick={() => messageUndo(newMessage)}>
                {newMessageDom}
            </div>
        );
        const newFlow = [...messageFlow, addUndo];
        newMessageFlow.current = newFlow;
        props.setMessageFlow(newFlow);
        setInputValue('');
        scrollToBottom('chatArea');
    };

    const messageUndo = (message) => {
        const id = message.undo();
        console.log(' id', id, newMessageFlow.current);
    };

    const inputOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const scrollToBottom = (id) => {
        setTimeout(() => {
            const dom = document.getElementById(id);
            const scrollHeight = dom ? dom.scrollHeight : 0;
            if (dom) {
                dom.scrollTo(0, scrollHeight);
            }
        }, 0);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            sendInfo();
        }
    };

    return (
        <div>
            <TextArea
                style={{ margin: '10px 0' }}
                rows={4}
                onChange={inputOnChange}
                value={inputValue}
                onKeyDown={onKeyDown}
            />
            <Button style={{ margin: '10px 0' }} onClick={sendInfo}>
                发送
            </Button>

            <Radio.Group
                onChange={onChange}
                value={type}
                style={{ margin: ' 0 20px' }}
            >
                <Radio value={1}>文字</Radio>
                <Radio value={2}>图片</Radio>
                <Radio value={3}>群消息</Radio>
            </Radio.Group>
            <Checkbox checked={isSelf} onChange={onChangeIsSelf}>
                自己
            </Checkbox>
        </div>
    );
}

function createMessage(content, type, isSelf, messageFlow) {
    const userInfo = new UserInfo(isSelf);
    const position = isSelf ? 'flex-end' : 'flex-start';
    const messageIndex = messageFlow.length;
    const MessageType = actions[type];
    let newMessage = new MessageType(content, position, userInfo, messageIndex);
    return newMessage;
}

export default SendMessage;
