function queuesFunc () {
    const obj = {
        queue: {},
        frontIndex: 0,
        rearIndex: 0,
        push: function (item) {
            obj.queue[obj.rearIndex] = item;
            obj.rearIndex++;
        },
        shift: function () {
            var temp = obj.queue[obj.frontIndex];
            delete obj.queue[obj.frontIndex];
            obj.frontIndex++;
            return temp;
        }
    };
    return obj;
}

console.log(queuesFunc('red'));

module.exports = queuesFunc;