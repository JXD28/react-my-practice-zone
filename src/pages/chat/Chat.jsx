import React, { useState, useEffect } from 'react';
import SendMessage from './send-message/SendMessage';

function Chat(props) {
    const [messageFlow, setMessageFlow] = useState([]);

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    height: '70vh',
                    width: '60%',
                    margin: '100px auto',
                }}
            >
                <div
                    id='chatArea'
                    style={{
                        height: '60%',
                        backgroundColor: '#f0f3ff',
                        border: '2px solid #1c5ac1',
                        borderRadius: 5,
                        overflow: 'auto',
                    }}
                >
                    {messageFlow}
                </div>
                <SendMessage
                    setMessageFlow={setMessageFlow}
                    messageFlow={messageFlow}
                ></SendMessage>
            </div>
        </div>
    );
}

export default Chat;
