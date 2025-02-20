// controller.js
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.noButton.onmouseover = () => this.moveNoButton();
        this.view.yesButton.onclick = () => this.handleYesButtonClick();
    }

    moveNoButton() {
        const container = this.view.noButton.parentElement;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // Calculate random position
        const randomX = Math.random() * (containerWidth - this.view.noButton.offsetWidth);
        const randomY = Math.random() * (containerHeight - this.view.noButton.offsetHeight);

        this.model.setNoButtonPosition(randomX, randomY);
        this.view.updateNoButtonPosition(randomX, randomY);
    }

    handleYesButtonClick() {
        this.view.showMessageBox('You are gay');
    }

    handleYesButtonClick() {
        // const gifUrl = "img/meme.gif"; // 替換為你的 GIF URL
        this.view.showMessageBox();

        document.removeEventListener('mousemove', this.moveNoButton.bind(this));
    }
}

// Initialize the MVC structure
const app = new Controller(new Model(), new View());