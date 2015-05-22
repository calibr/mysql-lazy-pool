var LazyPoolConnection = require('./LazyPoolConnection');

var Pool = require("mysql/lib/Pool");
// patch pool prototype

console.log("PATCH");
Pool.prototype.getLazyConnection = function(){
  return new LazyPoolConnection(this);
};