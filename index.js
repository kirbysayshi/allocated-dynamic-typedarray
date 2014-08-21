function AllocatedArray(maxLength, opt_type) {
  this._length = 0;
  this.data = new (opt_type || Uint32Array)(maxLength);
}

AllocatedArray.prototype.push = function(value) {
  var len = arguments.length;

  if (len === 1) {
    this.data[this._length] = value;
    return this._length += 1;
  }

  for (var i = 0; i < len; i++) {
    this.data[this._length] = arguments[i];
    this._length += 1;
  }

  return this._length;
}

AllocatedArray.prototype.length = function() {
  return this._length;
}

AllocatedArray.prototype.remove = function(index) {
  var value = this.data[index];
  this.data[index] = this.data[this._length-1];
  this._length -= 1;
  return value;
}

AllocatedArray.prototype.get = function(index) {
  return this.data[index];
}

AllocatedArray.prototype.toArray = function(opt_array) {
  var len = this._length;
  var arr = opt_array || new Array(len);

  for (var i = 0; i < len; i++) {
    arr[i] = this.data[i];
  }

  // Truncate length in case passed in array was larger.
  arr.length = len;
  return arr;
}

module.exports = AllocatedArray;