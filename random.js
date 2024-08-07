let num = 5.4;

// Math.round(); // 四舍五入
// Math.floor(); // 向上取整
// Math.ceil(); // 向下取整

function fn(min, max) {
  //(min, max) 不包含两端的值
  // return Math.round(Math.random() * (max - min - 2) + min + 1);
  //[min, max] 包含两端
  // return Math.round(Math.random() * (max - min) + min);
  // (min,max]
  // return Math.ceil(Math.random() * (max - min) + min);
  // [min, max)
  return Math.floor(Math.random() * (max - min) + min);
}
