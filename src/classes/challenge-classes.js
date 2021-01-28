class BackendManager {
    static challenges = {};
    constructor(options, type) {
        for (let option in options) {
            this[option] = options[option];
            challenges[type][options.id] = this;
        }
    }
    static getElement(type, id) {
        if (challenges[type][id]) return challenges[type][id]
        else return null;
    }
}

class Stopwatch extends BackendManager {
    instruct(instruction) {
        let args = instruction.split(' ');
        if (!args[1]) return;
        switch (args[0]) {
            case 'stop':

                break;
        }
    }
}
