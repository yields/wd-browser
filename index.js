
/**
 * Dependencies
 */

var map = require('./map');

/**
 * Export `parse`
 */

module.exports = parse;

/**
 * Parse the given `str`.
 *
 * @param {String} str
 * @return {Array}
 * @api public
 */

function parse(str){
  var m = /^([a-z]+)([0-9.]+)?/.exec(str);
  return range(m[2]).map(function(v){
    var oses = map[m[1]];
    var name = map.names[m[1]] || m[1];
    return [name, v, oses ? oses[v] : os(str)];
  });
}

/**
 * Parse range `str`
 *
 * @param {String} str
 * @return {Array}
 * @api public
 */

function range(str){
  if (!str) return [''];
  var m = str.split(/[.]{2,3}/);
  if (1 == m.length) return m;
  var a = Number(m.shift());
  var b = Number(m.shift());
  var ret = [];

  if (a == b) b++;
  if (!b) b = a;

  for (var i = a; i <= b; ++i) {
    ret.push(parseInt(i));
  }

  return ret;
}

/**
 * Get os from `name`.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function os(name){
  var parts = name.split(/ +/);
  parts.shift();
  return parts.join(' ') || 'OSX 10.9';
}
