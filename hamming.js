var Hamming = function () {

};

Hamming.prototype.compute = function (strand1, strand2) {
  var diff = 0;
  if (strand1.length !== strand2.length) {
    throw 'DNA strands must be of equal length.';
  }
  else {
    for (var i=0; i < strand1.length; i++) {
      if (strand1.charAt(i) !== strand2.charAt(i)) {
        diff++;
      }
    }
    return diff;
  }
};
module.exports = Hamming;