class BackendManager {//not to be invoked directly, acts as a parent for shared functions between challenges
    static challenges = {};
    constructor(options, type) {
        for(let option in options) {
            this[option] = options[option];
            challenges[type][options.id] = this;
        }
    }
}

class Stopwatch extends BackendManager {
    
}
