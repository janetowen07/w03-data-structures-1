function stacksFunc () { 
    const obj = {
        stack: {},
        index: 0,
        push: function (item) {
            obj.stack[obj.index] = item;
            obj.index++;
        },
        pop: function () {
            obj.index--;
            var temp = obj.stack[obj.index];
            delete obj.stack[obj.index];
            return temp;
        }
    }; return obj;
}

module.exports = stacksFunc;

// could be used to undo 
// recursion
// evaluating mathematical expressions BIDMAS