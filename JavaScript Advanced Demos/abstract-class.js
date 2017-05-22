
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
}