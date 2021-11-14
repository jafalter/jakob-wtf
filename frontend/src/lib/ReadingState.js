class ReadingState {
    _position;
    _end;
    _key;
    _words;

    constructor(key, endPos, words, cb) {
        this._key = "PROG_" + key;
        const memState = localStorage.getItem(this._key);
        this._end = endPos;
        this._words = words;
        if( memState !== null ) {
            const parsed = JSON.parse(memState);
            this._position = parsed.position;
        }
        else {
            this._position = 0;
        }
    }

    /**
     * Return percentage of article read
     * @return {number}
     */
    getPercentage() {
        return Math.min(Math.round((100 / this._end) * this._position), 100);
    }

    /**
     * Returns true if the reader has reached the end of the screen
     * @return {boolean}
     */
    isAtEnd(height) {
        return (this._end - this._position) <= 250;
    }

    /**
     * Update reading position
     * @param {number} p
     */
    updatePosition(p) {
        this._position = p;
    }

    /**
     * Save current position to localStorage
     */
    savePosition() {
        localStorage.setItem(this._key, JSON.stringify({
            position: this._position
        }));
    }

    get position() {
        return this._position;
    }

    /**
     * Get remaining time in minutes
     * @return {number}
     */
    getRemainingTime() {
        const read = this._words * (this.getPercentage() / 100);
        const remaining = this._words - read;
        return Math.round(remaining / 250);
    }
}

export default ReadingState