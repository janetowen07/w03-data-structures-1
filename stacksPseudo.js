
function stacksPseudo () { 
    // const obj = Object.create(stacksPseudo.prototype);
        this.stack = {};
        this.index = 0;
    // return obj;
}

stacksPseudo.prototype.push = function (item) {
            this.stack[this.index] = item;
            this.index++;
};

stacksPseudo.prototype.pop = function () {
            this.index--;
            var temp = this.stack[this.index];
            delete this.stack[this.index];
            return temp;
};

module.exports = stacksPseudo;