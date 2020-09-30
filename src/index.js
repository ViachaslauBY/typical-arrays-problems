exports.min = function min (array) {
  let minimum = Math.min.apply(null, array);  
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
      return minimum;
  }  
};

exports.max = function max (array) {
  let maximum = Math.max.apply(null, array);
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
      return maximum;
  }  
};

exports.avg = function avg (array) {
  let sum = 0;  
  let result = 0;
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
       array.forEach(function(elem) {
        sum += elem;  
        result = sum / array.length;             
  });
  return result;      
}};

// exports.avg = function avg (array) {
//   let sum = 0;  
//   let result = 0;
//   if(array == undefined || array.length == 0) {
//     return 0;
//   } else {
//       array.reduce(function(sum, elem) {
//         sum += elem;
//         result = sum / array.length;
//     }, 0);      
//   };
//   return result;
// }; 