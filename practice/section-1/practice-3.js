'use strict';

function collectSameElements(collectionA, objectB) {
  var result =new Array() ;
  for(var i = 0; i<collectionA.length; i++){
    for (var j= 0; j<objectB.value.length;j++){
      if (collectionA[j] = objectB.value[j]){
        if (!(result[result.length-1] == collectionA[i]))
          result.push(collectionA[i]);
      }
    }
  }
  return result;
}
