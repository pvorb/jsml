JSML
====

Appendable sequences of JSON documents

There’s an issue with JSON that I can’t tolerate: If you want to add a new
object to a JSON document, you have to rewrite the whole document. That makes it
inappropriate for logging an similar tasks. This is where JSML pitches in.

Example
-------

Here’s an example document that defines metadata for serveral articles:

``` javascript
{
  "title": "Hello World",
  "date":  "2012-08-09",
  "tags":  [ "hello world", "misc" ]
}
---
{
  "title": "The second article",
  "date":  "2012-08-10",
  "tags":  [ "misc" ]
}
```

Note that each object is a normal JSON representation of a JavaScript object.
In JSON itself, the same document would look like this:

``` javascript
[
  {
    "title": "Hello World",
    "date": "2012-08-09",
    "tags": [ "hello world", "misc" ]
  },
  {
    "title": "The second article",
    "date":  "2012-08-10",
    "tags":  [ "misc" ]
  }
]
```

So the only difference from a usual JSON document is, that objects in top level
arrays are separated by `---` on a distinct line.

Installation
------------

```
npm install jsml
```

or

```
ender build jsml
```

Usage
-----

You can use JSML just like [JSON](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON):

``` javascript
var JSML = require('jsml');

var jsmlDocument = '{ "title": "Hello World",\n'
                 + '"date":  "2012-08-09",\n'
                 + '"tags":  [ "hello world", "misc" ] }\n'
                 + '---\n'
                 + '{ "title": "The second article",\n'
                 + '"date":  "2012-08-10",\n'
                 + '"tags":  [ "misc" ] }\n';

// Parse a string

var doc = JSML.parse(jsmlDocument);

console.log(doc);

// Stringify an Object or an Array of Objects

var jsmlString = JSML.stringify(doc, null, '  ');

console.log(jsmlString);
```

This will print:

```
[ { title: 'Hello World',
    date: '2012-08-09',
    tags: [ 'hello world', 'misc' ] },
  { title: 'The second article',
    date: '2012-08-10',
    tags: [ 'misc' ] } ]
```

for the parsed string and the following for the _stringified_ array:

```
{
  "title": "Hello World",
  "date": "2012-08-09",
  "tags": [
    "hello world",
    "misc"
  ]
}
---
{
  "title": "The second article",
  "date": "2012-08-10",
  "tags": [
    "misc"
  ]
}
```

Bugs and Issues
---------------

If you encounter any bugs or issues, feel free to
[open an issue](https://github.com/pvorb/jsml/issues) at github.

License
-------

Copyright © 2012 Paul Vorbach

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
