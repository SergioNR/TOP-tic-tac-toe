export class Gameboard {

    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    get boardSize () {
        return this.sizeX * this.sizeY;
    }

    set boardSize (size) {
        this.sizeX = size/2;
        this.sizeY = size/2;
    }

}

