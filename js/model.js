// model.js
class Model {
    constructor() {
        this.noButtonPosition = { x: 0, y: 0 };
    }

    setNoButtonPosition(x, y) {
        this.noButtonPosition = { x, y };
    }

    getNoButtonPosition() {
        return this.noButtonPosition;
    }
}