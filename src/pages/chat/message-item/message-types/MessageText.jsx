import Message from '../Message';

class MessageText extends Message {
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
                        backgroundColor: 'green',
                    }}
                >
                    {this.content}
                </div>
            </div>
        );
    }
}

export default MessageText;
