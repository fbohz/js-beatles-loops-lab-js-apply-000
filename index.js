// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (var i = 4; i < musicians.length; i--) {
    for (var b = 4; b < instruments.length; b--) {
      arr = musicians[i] + " plays " + instruments[b]
     
    }
  }
   return arr
}