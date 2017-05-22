// stacks functional
function stacksFunc () { 
    var stack = {};
    var index = 0;
    const obj = {
        push: function (item) {
            stack[index] = item;
            index++;
        },
        pop: function () {
            delete stack[index];
            index--;
        }
    }; return obj;
}

// stacks functional shared
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
            delete this.stack[this.index];
            this.index--;
        }
 };

// stacks prototypal
function stacksProto () { 
    
 }

// stacks pseudoclassical
function stacksPseudo () { 
    
 }

// queues functional
function queuesFunc () { 
    var stack = {};
    var index = 0;
    
    const obj = {
            shiftIndex: 0,
            push: function (item) {
            stack[index] = item;
            index++;
        },
        shift: function () {
            delete stack[0];
            obj.shiftIndex++;
        }
    }; return obj;
 }

// queues functional shared
function queuesShared () { 
    const obj = {
        stack: {},
        index: 0,
        shiftIndex: 0,
        push: qsharedMethods.push,
        shift: qsharedMethods.shift
    }; return obj;
}

const qsharedMethods = {
    push: function (item) {
        this.stack[this.index] = item;
        this.index++;
    },
    shift: function () {
        delete this.stack[0];
        this.shiftIndex++;
    }
};

// queues prototypal
function queuesProto () { 
    
 }

// queues pseudoclassical
function queuesPseudo () { 
    
 }

module.exports = {stacksFunc: stacksFunc,
                stacksShared: stacksShared,
                stacksProto: stacksProto,
                stacksPseudo: stacksPseudo,
                queuesFunc: queuesFunc,
                queuesShared: queuesShared,
                queuesProto: queuesProto,
                queuesPseudo: queuesPseudo};