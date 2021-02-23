class Message {
    constructor(userInfo, messageIndex, messageKey) {
        this.userInfo = userInfo;
        this.messageIndex = messageIndex;
        this.key = messageKey;
    }

    undo = () => {
        return this.key;
    };
}

class MessageImg extends Message {
    constructor(content, position, userInfo, messageIndex, messageKey) {
        super(userInfo, messageIndex, messageKey);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.key}
                style={{ display: 'flex', justifyContent: this.position }}
            >
                <div
                    style={{
                        width: '30%',
                        backgroundColor: 'gray',
                        margin: 10,
                        height: 120,
                        background: `url(${this.content})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
            </div>
        );
    }
}

class MessageSys extends Message {
    constructor(content, position, userInfo, messageIndex, messageKey) {
        super(userInfo, messageIndex, messageKey);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.key}
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div
                    style={{
                        width: '100%',
                        backgroundColor: '#9e9e9e99',
                        margin: 10,
                        padding: 3,
                        borderRadius: 5,
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    {this.content}
                </div>
            </div>
        );
    }
}

class MessageText extends Message {
    constructor(content, position, userInfo, messageIndex, messageKey) {
        super(userInfo, messageIndex, messageKey);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.key}
                style={{ display: 'flex', justifyContent: this.position }}
            >
                <div
                    style={{
                        width: '30%',
                        backgroundColor:
                            this.position === 'flex-start'
                                ? 'white'
                                : '#8bc34a',
                        margin: 10,
                        padding: 3,
                        borderRadius: 5,
                    }}
                >
                    {this.content}
                </div>
            </div>
        );
    }
}

export { MessageImg, MessageSys, MessageText };
