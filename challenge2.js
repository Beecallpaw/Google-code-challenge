const getXthNum = (x) => {
  let val = 0;
  while (x != 0) {
    val += x;
    x--;
  }
  return val;
};

const getYthNum = (y, x) => {
  let val = 0;
  for (i = 0; i < y - 1; i++) {
    val += x + i;
  }
  return val;
};

const solution = (x, y) => getXthNum(x) + getYthNum(y, x) + "";

console.log(solution(3, 2));
console.log(solution(5, 10));
console.log(solution(95000, 10000));
