function queuesFunc () {
    const obj = {
        queue: {},
        frontIndex: 0,
        rearIndex: 0,
        push: sharedMethods.push,
        shift: sharedMethods.shift
    };
    return obj;
}

const sharedMethods = {
    push: function (item) {
            this.queue[this.rearIndex] = item;
            this.rearIndex++;
        },
        shift: function () {
            var temp = this.queue[this.frontIndex];
            delete this.queue[this.frontIndex];
            this.frontIndex++;
            return temp;
        }
};

console.log(queuesFunc('red'));

module.exports = queuesFunc;