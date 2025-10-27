const add = require('./math');

function runTests() {
  if (add(2, 3) !== 5) {
    throw new Error('❌ Test failed: add(2, 3) should be 5');
  }

  if (add(-1, 1) !== 0) {
    throw new Error('❌ Test failed: add(-1, 1) should be 0');
  }

  console.log('✅ All tests passed!');
}

runTests();
