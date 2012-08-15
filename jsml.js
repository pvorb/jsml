(function() {
  'use strict';

  var JSML = module.exports = {};
  var objSeparator = /\r?\n---+\r?\n/;

  // parses a JSML document string
  JSML.parse = function (docstr) {
    var doc = docstr.split(objSeparator);
    var len = doc.length;
    var result = new Array(len);

    for (var i = 0; i < len; i++)
      result[i] = JSON.parse(doc[i]);

    return result;
  };

  // returns the string representation of a value or a list of values
  JSML.stringify = function (doc, replacer, space) {
    if (typeof doc != 'object' || !(doc instanceof Array))
      return JSON.stringify(doc, replacer, space);

    var len = doc.length;
    var result = new Array(len);

    for (var i = 0; i < len; i++)
      result[i] = JSON.stringify(doc[i], replacer, space);

    return result.join('\n---\n');
  };
})();
