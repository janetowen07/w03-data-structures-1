function queuesProto () {
    const obj = Object.create(queuesProto.prototype);
        obj.queue = {};
        obj.frontIndex = 0;
        obj.rearIndex = 0;
        return obj;
}

queuesProto.prototype.size = function () {
            return this.frontIndex - this.rearIndex;
}

queuesProto.prototype.push = function (item) {
            this.queue[this.rearIndex] = item;
            this.rearIndex++;
        };
queuesProto.prototype.shift = function () {
            var temp = this.queue[this.frontIndex];
            delete this.queue[this.frontIndex];
            this.frontIndex++;
            return temp;
        };

module.exports = queuesProto;