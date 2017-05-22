const expect = require('chai').expect;
const queuesProto = require('../queuesProto');

describe('queuesProto', function () {
  it('is a function', function () {
    expect(queuesProto).to.be.a('function');
  });
  it('should push values into a queue', function () {
      const colours = queuesProto();
      colours.push('red');
      colours.push('orange');
      colours.push('yellow');
      expect(colours.queue).to.eql({0: 'red', 1: 'orange', 2: 'yellow'});
  });
  it('should remove properties with the pop function', function() {
    const colours = queuesProto();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.shift();
    expect(colours.queue).to.eql({1: 'orange', 2: 'yellow'});
  });
  it('should push values with the correct index after items have been popped', function() {
    const colours = queuesProto();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.shift();  
    colours.push('green');
    expect(colours.queue).to.eql({1: 'orange', 2: 'yellow', 3: 'green'});
  });
});