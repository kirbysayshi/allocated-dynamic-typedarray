var test = require('tape');
var AA = require('./');

test('with Uint32Array (default)', function(t) {

  var a = new AA(4);
  t.equal(a.length(), 0);

  a.push(1);
  a.push(2);
  a.push(3);
  a.push(4);
  t.equal(a.length(), 4);
  t.equal(a.get(0), 1);

  a.remove(1);
  t.equal(a.length(), 3);
  t.equal(a.get(1), 4);

  t.end();
});

test('with Uint8Array', function(t) {

  var a = new AA(4, Uint8Array);
  t.equal(a.length(), 0);

  a.push(1);
  a.push(2);
  a.push(3);
  a.push(4);
  t.equal(a.length(), 4);
  t.equal(a.get(0), 1);

  a.remove(1);
  t.equal(a.length(), 3);
  t.equal(a.get(1), 4);

  t.end();
});

test('toArray()', function(t) {

  var a = new AA(4);
  a.push(1, 2, 3, 4);
  t.equal(a.length(), 4);
  t.deepEqual(a.toArray(), [1, 2, 3, 4]);

  t.end();
});

test('toArray(arr)', function(t) {

  var a = new AA(4);
  var b = [];
  a.push(1, 2, 3, 4);
  t.equal(a.length(), 4);
  t.deepEqual(a.toArray(b), [1, 2, 3, 4]);
  t.deepEqual(b, [1, 2, 3, 4]);

  t.end();
});