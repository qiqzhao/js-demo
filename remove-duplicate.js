var arr = [
  {},
  {},
  "",
  "",
  233,
  233,
  "abc",
  undefined,
  null,
  null,
  NaN,
  NaN,
  123,
  [2],
  [2],
  [2, 3],
];

Array.prototype.myUnique = function () {
  // return Array.from(new Set(this));

  // let newArr = [];
  // for (let i = 0; i < this.length; i++) {
  //   if (!newArr.includes(this[i])) {
  //     newArr.push(this[i]);
  //   }
  // }
  // return newArr;

  return this.filter((v, index) => {
    return this.indexOf(v, 0) === index;
  });
};

console.log(arr.myUnique());
