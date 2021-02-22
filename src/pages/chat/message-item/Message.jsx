import uuidV4 from 'uuid/dist/v4';

class Message {
    constructor(userInfo, messageIndex) {
        this.userInfo = userInfo;
        this.messageIndex = messageIndex;
        this.uuid = uuidV4();
    }

    undo = () => {
        console.log('undo', this.uuid);
        return this.uuid;
    };
}

class MessageImg extends Message {
    constructor(content, position, userInfo, messageIndex) {
        super(userInfo, messageIndex);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.uuid}
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
    constructor(content, position, userInfo, messageIndex) {
        super(userInfo, messageIndex);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.uuid}
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
    constructor(content, position, userInfo, messageIndex) {
        super(userInfo, messageIndex);
        this.content = content;
        this.position = position;
    }

    showMessage() {
        return (
            <div
                key={this.uuid}
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
