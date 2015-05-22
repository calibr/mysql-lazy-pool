require("mysql");

var LazyPoolConnection = require('./LazyPoolConnection');

var Pool = require("mysql/lib/Pool");
// patch pool prototype

Pool.prototype.getLazyConnection = function(){
  return new LazyPoolConnection(this);
};