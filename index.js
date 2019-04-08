// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length - 1; i++) {
    for (var b = 0; b < instruments.length - 1; b++) {
      arr = musicians[i] + " plays " + instruments[b]
     
    }
  }
   return arr
}