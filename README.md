
allocated-dynamic-typedarray
============================

Allocate an entire array, but automatically track which indices are occupied.

Example
-------

```js
var ADTA = require('allocated-dynamic-typedarray');

var a = new ADTA(64); // maximum size is 64, defaults to Uint32Array
a.length(); // 0
a.push(72);
a.length(); // 1
a.get(0); // 72
a.push(23);
a.push(34);
a.push(56);
a.length() // 4
a.remove(1);
a.length(); // 3
a.toArray(); // [72,56,34]
```

Notice how the order of the items is not guaranteed after a `.remove()`. This is to prevent needing to shift or push all values. If you need functionality otherwise, try a different module.

Pushing a value that would cause the array to exceed it's initial limit silently fails for now, as that's why TypedArrays do.

Since this is backed by a TypedArray, only values that could normally be stored in a TypedArray will succeed.

Contributing
------------

```sh
npm test
```

Pull requests are welcome!

License
-------

MIT
