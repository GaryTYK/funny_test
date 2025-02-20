// view.js
class View {
    constructor() {
        this.noButton = document.getElementById('noButton');
        this.yesButton = document.getElementById('yesButton');
        this.messageBox = document.getElementById('messageBox');
        this.messageText = document.getElementById('messageImage');
        this.closeMessageBoxButton = document.getElementById('closeMessageBox');

        if (!this.noButton || !this.yesButton) {
            console.error("按鈕元素未找到！");
        }

        // 關閉消息框的事件
        this.closeMessageBoxButton.onclick = () => this.closeMessageBox();
    }

    updateNoButtonPosition(x, y) {
        this.noButton.style.left = `${x}px`;
        this.noButton.style.top = `${y}px`;
    }

    showMessageBox() {
        // this.messageImage.src = gifUrl; // 設置圖片源為 GIF
        this.messageBox.style.display = 'block'; // 顯示消息框
    }

    closeMessageBox() {
        this.messageBox.style.display = 'none'; // 隱藏消息框
    }
}
