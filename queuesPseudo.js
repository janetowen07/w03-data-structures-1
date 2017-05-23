function queuesPseudo () {
    // const obj = Object.create(queuesPseudo.prototype);
        this.queue = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
        // return obj;
}

queuesPseudo.prototype.push = function (item) {
            this.queue[this.rearIndex] = item;
            this.rearIndex++;
        };
queuesPseudo.prototype.shift = function () {
            var temp = this.queue[this.frontIndex];
            delete this.queue[this.frontIndex];
            this.frontIndex++;
            return temp;
        };

module.exports = queuesPseudo;