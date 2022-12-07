var min = function(list){
  list.sort(function (a, b) {return a - b})
  return list[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))