function stacksShared () { 
    const obj = {
        stack: {},
        index: 0,
        push: sharedMethods.push,
        pop: sharedMethods.pop
    }; return obj;
}

const sharedMethods = {
        push: function (item) {
            this.stack[this.index] = item;
            this.index++;
        },
          pop: function () {
            this.index--;
            var temp = this.stack[this.index];
            delete this.stack[this.index];
            return temp;
        }
};

module.exports = stacksShared;