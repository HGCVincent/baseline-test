'use strict';

function collectSameElements(collectionA, collectionB) {
  var result =new Array() ;
  for(var i = 0; i<collectionB.length; i++){
    for (var j= 0; j<collectionA.length;j++){
     if (collectionA[j] == collectionB[i]){
       if (result.indexOf(collectionB[i]) == -1)
       result.push(collectionB[i]);
     }
    }
  }
  return result;
}
