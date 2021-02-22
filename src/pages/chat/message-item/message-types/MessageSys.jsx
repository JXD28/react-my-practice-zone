import Message from '../Message';

class MessageSys extends Message {
    constructor(content, position, userInfo, messageIndex) {
        super(userInfo, messageIndex);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div>
                <div
                    style={{
                        width: '30%',
                        backgroundColor: 'gray',
                    }}
                >
                    {this.content}
                </div>
            </div>
        );
    }
}

export default MessageSys;
