import Message from '../Message';

class MessageImg extends Message {
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
                    <img src={this.content}></img>
                </div>
            </div>
        );
    }
}

export default MessageImg;
