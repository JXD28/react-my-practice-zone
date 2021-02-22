class UserInfo {
    constructor(isSelf) {
        this.createTime = new Date().toLocaleTimeString();
        this.UserInfo = isSelf ? '我' : '其他';
    }
}

export default UserInfo;
