nums = [];
const solution = (num) => {
  if (num != 0) {
    max = Math.floor(Math.sqrt(num));
    pow = Math.pow(max, 2);
    nums.push(pow);
    diff = num - pow;
    solution(diff);
  }
  return nums;
};
console.log(solution(15324));
