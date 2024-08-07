let arr = [1, 2, 3];

Array.prototype.myUnshift = function () {
  const len = arguments.length;
  for (let i = len - 1; i >= 0; i--) {
    const element = arguments[i];
    this.splice(0, 0, element);
  }
  return this.length;
};

console.log(arr.myUnshift(2,3,4), arr)
