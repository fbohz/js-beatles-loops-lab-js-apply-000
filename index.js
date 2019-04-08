// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = []
  var i
  var b
  for (i = 0; i < musicians.length; i++) {
    for (b = 0; b < instruments.length; b++) {
      arr = musicians[i] + " plays " + instruments[b]
     
    }
  }
   return arr
}