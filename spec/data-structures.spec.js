const expect = require('chai').expect;
const _ = require('../data-structures');
const stacksFunc = _.stacksFunc;
const stacksShared = _.stacksShared;
const stacksProto = _.stacksProto;
const stacksPseudo = _.stacksPseudo;
const queuesFunc = _.queuesFunc;
const queuesShared = _.queuesShared;
const queuesProto = _.queuesProto;
const queuesPseudo = _.queuesPseudo;

// stacksFunc
describe('stacksFunc', function () {
  it('is a function', function () {
    expect(stacksFunc).to.be.a('function');
  });
    it('should push values into a stack', function () {
      stacksFunc.obj.push('red');
      stacksFunc.obj.push('orange');
      stacksFunc.obj.push('yellow');
      expect(stacksFunc()).to.eql({0: 'red', 1: 'orange', 3: 'yellow'});
  });
});

// stacksShared
describe('stacksShared', function () {
  it('is a function', function () {
    expect(stacksShared).to.be.a('function');
  });
});

// stacksProto
describe('stacksProto', function () {
  it('is a function', function () {
    expect(stacksProto).to.be.a('function');
  });
});

// stacksPseudo
describe('stacksPseudo', function () {
  it('is a function', function () {
    expect(stacksPseudo).to.be.a('function');
  });
});

// queuesFunc
describe('queuesFunc', function () {
  it('is a function', function () {
    expect(queuesFunc).to.be.a('function');
  });
});

// queuesShared
describe('queuesShared', function () {
  it('is a function', function () {
    expect(queuesShared).to.be.a('function');
  });
});

// queuesProto
describe('queuesProto', function () {
  it('is a function', function () {
    expect(queuesProto).to.be.a('function');
  });
});

// queuesPseudo
describe('queuesPseudo', function () {
  it('is a function', function () {
    expect(queuesPseudo).to.be.a('function');
  });
});