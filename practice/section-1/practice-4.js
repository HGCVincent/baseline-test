'use strict';

function collectSameElements(collectionA, objectB) {
  var result =new Array() ;
  for(var i = 0; i<collectionA.length; i++){
    for (var  ob  in  objectB){
      if (collectionA[i] = ob){
        if (!(result[result.length-1] == ob))
          result.push(ob);
      }
    }
  }
  return result;
}
