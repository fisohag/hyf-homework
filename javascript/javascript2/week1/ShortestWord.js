
var arr = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
console.log(
  arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)

