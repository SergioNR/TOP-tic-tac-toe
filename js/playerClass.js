export class Player {
    ownproperty = `ownproperty`;

    constructor (name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }

    #score = 0;
    
    getPlayerScore () {
        return this.#score
    };

    incrementPlayerScore (amountToIncrementScoreBy = 1) {
        this.#score = this.#score + amountToIncrementScoreBy;
    };


    resetPlayerScore () {
        this.#score = 0;
    };

    get fullName () {
        return `${this.name} ${this.symbol}`;
    }

    set fullName (name) {
        const nameParts = name.split(` `);
        this.name = nameParts[0];
        this.symbol = nameParts[1];
    }

};

