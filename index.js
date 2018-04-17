function theBeatlesPlay(mArray,iArray){
  var combArray = []
  for(var i=0; i< mArray.length ; i++){
    combArray[i] = `${mArray[i]} plays ${iArray[i]}`

  }
  return combArray
}
