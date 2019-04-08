// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    for (var b = 0; b < instruments.length; b++) {
      arr = musicians[i] + " plays " + instruments[b]
     
    }
  }
   return arr
}

function johnLennonFacts (facts) {
  var i = 0;
  var arr = []
  while (i < facts.length) {
    arr = facts[i] + "!!!"
    i++
  }
  return arr;
}